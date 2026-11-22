/**
 * ELIANNA'S ROYAL CATALOG VALIDATORS
 * Loaded after royallibrary.js to validate volume inscription forms safely.
 */

const ELIANA_VALIDATION = {
    titleRequired: 'Books are treasures that capture the brilliance of history—don’t leave one without a title.',
    titleTooShort: (min) => `A single letter isn’t a real title—give a treasure of history at least ${min} characters.`,
    authorRequired: 'Books capture the brilliance of real minds and history—someone wrote this. Put their name down.',
    pagesInvalid: 'A book’s pages have to be a whole number of at least 1—don’t give a treasure a fake or negative count.',
    pagesTooHigh: (max) => `Over ${max.toLocaleString()} pages? Be serious—give the real page count.`,
    shelfRequired: 'A treasure belongs in its proper wing—pick which shelf this book goes on.'
};

function getOrCreateErrorElement(input) {
    if (!input) return null;
    const explicitId = input.getAttribute('aria-errormessage') || `${input.id}-error`;
    let errorEl = document.querySelector(`[data-error-for="${input.id}"]`) || document.getElementById(explicitId);

    if (!errorEl && input.parentElement) {
        errorEl = document.createElement('span');
        errorEl.className = 'field-error eliana-validation-msg';
        errorEl.dataset.errorFor = input.id;
        errorEl.setAttribute('aria-live', 'polite');
        input.insertAdjacentElement('afterend', errorEl);
    } else if (errorEl && !errorEl.hasAttribute('aria-live')) {
        errorEl.setAttribute('aria-live', 'polite');
    }

    return errorEl;
}

function validateField(input) {
    if (!input) return true;

    const errorEl = getOrCreateErrorElement(input);
    const trimmed = input.value.trim();
    const fieldName = (input.name || input.id || '').toLowerCase();
    let message = '';

    if (fieldName.includes('title')) {
        if (!trimmed) {
            message = ELIANA_VALIDATION.titleRequired;
        } else if (trimmed.length < 2) {
            message = ELIANA_VALIDATION.titleTooShort(2);
        }
    } else if (fieldName.includes('author')) {
        if (!trimmed) {
            message = ELIANA_VALIDATION.authorRequired;
        }
    } else if (fieldName.includes('page')) {
        if (trimmed !== '') {
            const num = Number(trimmed);
            const maxPages = Number(input.max) || 50000;
            if (!Number.isInteger(num) || num < 1) {
                message = ELIANA_VALIDATION.pagesInvalid;
            } else if (num > maxPages) {
                message = ELIANA_VALIDATION.pagesTooHigh(maxPages);
            }
        } else if (input.required) {
            message = ELIANA_VALIDATION.pagesInvalid;
        }
    } else if (fieldName.includes('shelf') || fieldName.includes('wing')) {
        if (input.required && !trimmed) {
            message = ELIANA_VALIDATION.shelfRequired;
        }
    } else if (input.required && !trimmed) {
        message = 'This field must be completed before sealing the royal entry.';
    }

    input.setCustomValidity(message);
    input.classList.toggle('is-invalid', Boolean(message));
    input.setAttribute('aria-invalid', message ? 'true' : 'false');

    if (errorEl) {
        errorEl.textContent = message;
    }

    return !message;
}

function initRoyalFormValidation() {
    const form = document.querySelector('#add-volume-form, #book-form, #add-book-form, form[data-library-form]');
    if (!form) return;

    form.setAttribute('novalidate', '');

    const fields = Array.from(form.querySelectorAll('input, select, textarea'));

    fields.forEach((field) => {
        field.addEventListener('input', () => validateField(field));
        field.addEventListener('blur', () => validateField(field));
    });

    form.addEventListener('submit', (e) => {
        let firstInvalid = null;
        const allValid = fields.reduce((validSoFar, field) => {
            const isFieldValid = validateField(field);
            if (!isFieldValid && !firstInvalid) {
                firstInvalid = field;
            }
            return validSoFar && isFieldValid;
        }, true);

        if (!allValid) {
            e.preventDefault();
            e.stopImmediatePropagation();
            if (firstInvalid) {
                firstInvalid.focus();
            }
        }
    }, true);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRoyalFormValidation);
} else {
    initRoyalFormValidation();
}