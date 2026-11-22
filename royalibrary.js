/**
 * THE ROYAL LIBRARY - BIBLIOPHILE PRINCESS LIBRARY(v9-bibliophile-princess)
 * Pure royal collection: Ancient Classics, Scholarly Fairy Tales, Star Traveller,
 * Courtly Romances, Etiquette & Statecraft, and Shared Readings with Prince Christopher.
 */

const LIBRARY_VERSION = 'v9-bibliophile-princess-royal';

// Elianna's Royal Catalog Validation Messages
const ELIANA_VALIDATION = {
    titleRequired: 'Books are treasures that capture the brilliance of history—don’t leave one without a title.',
    titleTooShort: (min) => `A single letter isn’t a real title—give a treasure of history at least ${min} characters.`,
    authorRequired: 'Books capture the brilliance of real minds and history—someone wrote this. Put their name down.',
    pagesInvalid: 'A book’s pages have to be a whole number of at least 1—don’t give a treasure a fake or negative count.',
    pagesTooHigh: (max) => `Over ${max.toLocaleString()} pages? Be serious—give the real page count.`,
    shelfRequired: 'A treasure belongs in its proper wing—pick which shelf this book goes on.'
};

// Book Constructor
class Book {
    constructor(id, title, author, shelf, status, notes, pages = null) {
        this.id = id || generateId();
        this.title = title;
        this.author = author;
        this.shelf = shelf;
        this.status = status || 'powerfully-read'; // 'powerfully-read' or 'powerfully-reading'
        this.notes = notes || '';
        if (pages !== null && pages !== undefined && pages !== '') {
            this.pages = Number(pages);
        }
    }

    toggleRead() {
        this.status = this.status === 'powerfully-read' ? 'powerfully-reading' : 'powerfully-read';
    }
}

// Safe ID Fallback Engine
function generateId() {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        try {
            return crypto.randomUUID();
        } catch (e) {
            // Fallback if security context restricts randomUUID
        }
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Pure Bibliophile Princess Royal Collection
const rawSeedData = [
    // --- Ancient Classics & Scholarly Archives (Papyrus & Ancient Scroll Theme) ---
    {
        id: generateId(),
        title: "The Histories",
        author: "Herodotus",
        shelf: "Ancient Classics",
        status: "powerfully-read",
        notes: "The monumental inquiry into the customs, wars, and marvels of the ancient world."
    },
    {
        id: generateId(),
        title: "Parallel Lives",
        author: "Plutarch",
        shelf: "Ancient Classics",
        status: "powerfully-read",
        notes: "Biographical portraits examining virtue and vice across Greek and Roman titans."
    },
    {
        id: generateId(),
        title: "The Annals",
        author: "Tacitus",
        shelf: "Latin Classics",
        status: "powerfully-reading",
        notes: "A piercing, unsparing chronicle of imperial power, corruption, and survival."
    },
    {
        id: generateId(),
        title: "Meditations",
        author: "Marcus Aurelius",
        shelf: "Ancient Greek",
        status: "powerfully-read",
        notes: "Private Stoic reflections on duty, resilience, and the quiet center of the mind."
    },
    {
        id: generateId(),
        title: "The Art of War (Classic Edition)",
        author: "Sun Tzu",
        shelf: "Traditional Chinese",
        status: "powerfully-read",
        notes: "Timeless wisdom on strategic adaptability, timing, and psychological mastery."
    },
    {
        id: generateId(),
        title: "Records of the Grand Historian",
        author: "Sima Qian",
        shelf: "Traditional Chinese",
        status: "powerfully-reading",
        notes: "The sweeping chronicle of dynasties past, bridging myth and empirical history."
    },
    {
        id: generateId(),
        title: "The Aeneid",
        author: "Virgil",
        shelf: "Latin Classics",
        status: "powerfully-read",
        notes: "The epic verse of fate, empire, and the long road to founding a new home."
    },
    {
        id: generateId(),
        title: "Tao Te Ching",
        author: "Laozi",
        shelf: "Traditional Chinese",
        status: "powerfully-read",
        notes: "Poetic wisdom on effortless action (wu-wei) and alignment with the universe."
    },

    // --- Scholarly Fairy Tales & Cosmic Wings (Special Galaxy Blue Theme) ---
    {
        id: generateId(),
        title: "The Blue Fairy Book",
        author: "Andrew Lang",
        shelf: "Scholarly Fairy Tales",
        status: "powerfully-read",
        notes: "The foundational folkloric collection gathering timeless European fairy tales with scholarly elegance."
    },
    {
        id: generateId(),
        title: "Grimms' Fairy Tales",
        author: "Brothers Grimm",
        shelf: "Scholarly Fairy Tales",
        status: "powerfully-read",
        notes: "The unvarnished, mythic German folk and fairy tales compiled with historical depth and dark poetic resonance."
    },
    {
        id: generateId(),
        title: "The Star Traveller",
        author: "Sanctuary Archives",
        shelf: "Scholarly Fairy Tales",
        status: "powerfully-read",
        notes: "The crown jewel of cosmic odysseys, charting voyages across distant starlit galaxies and dream dimensions."
    },
    {
        id: generateId(),
        title: "The Uses of Enchantment",
        author: "Bruno Bettelheim",
        shelf: "Scholarly Fairy Tales",
        status: "powerfully-reading",
        notes: "A profound psychoanalytic exploration of the emotional and psychological necessity of fairy tales."
    },
    {
        id: generateId(),
        title: "Fairy Tales and the Art of Subversion",
        author: "Jack Zipes",
        shelf: "Scholarly Fairy Tales",
        status: "powerfully-read",
        notes: "A critical examination of how folk and fairy tales reflect social history, magic, and cultural rebellion."
    },

    // --- Courtly Romances & Medieval Masterpieces (Soft Glow Enchanting Pink Theme) ---
    {
        id: generateId(),
        title: "The Romance of the Rose",
        author: "Guillaume de Lorris and Jean de Meun",
        shelf: "Courtly Romances",
        status: "powerfully-read",
        notes: "The landmark medieval allegorical dream vision on courtly love and human desire."
    },
    {
        id: generateId(),
        title: "Le Morte d'Arthur",
        author: "Sir Thomas Malory",
        shelf: "Courtly Romances",
        status: "powerfully-read",
        notes: "The quintessential epic chronicling the rise and tragic fall of King Arthur and the Round Table."
    },
    {
        id: generateId(),
        title: "The Name of the Rose",
        author: "Umberto Eco",
        shelf: "Courtly Romances",
        status: "powerfully-read",
        notes: "A labyrinthine medieval murder mystery woven with semiotics, heresy, and monastic library secrets."
    },

    // --- Etiquette & Statecraft ---
    {
        id: generateId(),
        title: "The Prince",
        author: "Niccolò Machiavelli",
        shelf: "Etiquette & Statecraft",
        status: "powerfully-read",
        notes: "The unflinching tactical treatise on power, pragmatism, and political survival."
    },
    {
        id: generateId(),
        title: "The Book of the Courtier",
        author: "Baldassare Castiglione",
        shelf: "Etiquette & Statecraft",
        status: "powerfully-read",
        notes: "The definitive Renaissance guide to grace, wit, sprezzatura, and aristocratic behavior."
    },
    {
        id: generateId(),
        title: "Galateo: The Rules of Good Behaviour",
        author: "Giovanni della Casa",
        shelf: "Etiquette & Statecraft",
        status: "powerfully-reading",
        notes: "A witty, foundational Renaissance manual on manners, social harmony, and civilized grace."
    },

    // --- Shared Royal Reading with Prince Christopher (Radiant Royal Yellow Theme) ---
    {
        id: generateId(),
        title: "The Diplomatic Treaties of the Eastern Realm",
        author: "Archduke Ferdinand of Sylvania",
        shelf: "Shared Royal Reading",
        status: "powerfully-read",
        notes: "Studied together during quiet evenings in the palace gardens to prepare for kingdom affairs."
    },
    {
        id: generateId(),
        title: "Sonnets from the Portuguese & Other Love Poems",
        author: "Elizabeth Barrett Browning",
        shelf: "Shared Royal Reading",
        status: "powerfully-read",
        notes: "Read aloud beneath the starlit gazebo—a quiet sanctuary from royal duties."
    },
    {
        id: generateId(),
        title: "The Chronicle of the Founding Dynasties",
        author: "Royal Court Historians",
        shelf: "Shared Royal Reading",
        status: "powerfully-reading",
        notes: "A massive multi-volume history they annotate together in the margins."
    },
    {
        id: generateId(),
        title: "Fairy Tales of the High Kingdom",
        author: "Court Chronicler Valerius",
        shelf: "Shared Royal Reading",
        status: "powerfully-read",
        notes: "The very book of stories Christopher remembered from childhood and shared with Elianna."
    }
];

let myLibrary = [];

function loadLibrary() {
    const savedVersion = localStorage.getItem('library_version');
    const savedData = localStorage.getItem('myLibrary');

    if (savedVersion !== LIBRARY_VERSION || !savedData) {
        myLibrary = rawSeedData.map(item => new Book(item.id, item.title, item.author, item.shelf, item.status, item.notes, item.pages));
        saveLibrary();
    } else {
        try {
            const parsed = JSON.parse(savedData);
            myLibrary = parsed.map(item => new Book(item.id, item.title, item.author, item.shelf, item.status, item.notes, item.pages));
        } catch (e) {
            myLibrary = rawSeedData.map(item => new Book(item.id, item.title, item.author, item.shelf, item.status, item.notes, item.pages));
            saveLibrary();
        }
    }
}

function saveLibrary() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
    localStorage.setItem('library_version', LIBRARY_VERSION);
}

document.addEventListener('DOMContentLoaded', () => {
    loadLibrary();
    initPortalEngine();
    initScribeModal();
    initUIEventListeners();
    initBookFormValidation();
    renderLibrary();
});

function initPortalEngine() {
    const portal = document.getElementById('threshold-portal');
    if (!portal) return;

    function shatterPortal() {
        portal.classList.add('shattered');
        setTimeout(() => {
            portal.style.display = 'none';
        }, 800);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && portal.style.display !== 'none') {
            shatterPortal();
        }
    });

    portal.addEventListener('click', shatterPortal);
}

function initScribeModal() {
    const modal = document.getElementById('scribe-modal');
    const openBtn = document.getElementById('open-scribe-btn');
    const closeBtn = document.getElementById('close-scribe-btn');
    const titleInput = document.getElementById('book-title');

    if (!modal || !openBtn) return;

    function openModal() {
        modal.style.display = 'flex';
        modal.classList.add('open', 'active', 'is-open');
        if (titleInput) {
            titleInput.focus();
        }
    }

    function closeModal() {
        modal.style.display = 'none';
        modal.classList.remove('open', 'active', 'is-open');
    }

    openBtn.addEventListener('click', openModal);

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display !== 'none') {
            closeModal();
        }
    });
}

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
    const rawValue = input.value;
    const trimmed = rawValue.trim();
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

function initBookFormValidation() {
    const form = document.querySelector('#add-volume-form, #book-form, #add-book-form, form[data-library-form]');
    if (!form) return;

    form.setAttribute('novalidate', '');

    const fields = Array.from(form.querySelectorAll('input, select, textarea'));

    fields.forEach((field) => {
        field.addEventListener('input', () => validateField(field));
        field.addEventListener('blur', () => validateField(field));
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        let firstInvalid = null;
        const allValid = fields.reduce((validSoFar, field) => {
            const isFieldValid = validateField(field);
            if (!isFieldValid && !firstInvalid) {
                firstInvalid = field;
            }
            return validSoFar && isFieldValid;
        }, true);

        if (!allValid) {
            if (firstInvalid) {
                firstInvalid.focus();
            }
            return;
        }

        const titleInput = form.querySelector('[name="title"], #book-title, #title');
        const authorInput = form.querySelector('[name="author"], #book-author, #author');
        const shelfInput = form.querySelector('[name="shelf"], #book-shelf, #shelf');
        const statusInput = form.querySelector('[name="status"], #book-status, #status');
        const notesInput = form.querySelector('[name="notes"], #book-notes, #notes');
        const pagesInput = form.querySelector('[name="pages"], #book-pages, #pages');

        const newBook = new Book(
            generateId(),
            titleInput ? titleInput.value.trim() : 'Untitled Volume',
            authorInput ? authorInput.value.trim() : 'Unknown Archivist',
            shelfInput && shelfInput.value.trim() ? shelfInput.value.trim() : 'Scholarly Fairy Tales',
            statusInput && statusInput.value ? statusInput.value : 'powerfully-reading',
            notesInput ? notesInput.value.trim() : '',
            pagesInput && pagesInput.value.trim() !== '' ? Number(pagesInput.value.trim()) : null
        );

        myLibrary.push(newBook);
        saveLibrary();
        renderLibrary();

        form.reset();
        fields.forEach((field) => {
            field.setCustomValidity('');
            field.classList.remove('is-invalid');
            field.removeAttribute('aria-invalid');
            const errorEl = getOrCreateErrorElement(field);
            if (errorEl) errorEl.textContent = '';
        });

        const modal = form.closest('dialog, .modal, [role="dialog"], .scribe-modal-overlay');
        if (modal) {
            modal.style.display = 'none';
            modal.classList.remove('open', 'active', 'is-open');
            if (typeof modal.close === 'function' && modal.open) {
                modal.close();
            }
        }
    });
}

function initUIEventListeners() {
    const libraryContainer = document.getElementById('library');
    if (!libraryContainer) return;

    libraryContainer.addEventListener('click', (e) => {
        const card = e.target.closest('.book-card');
        if (!card) return;
        const bookId = card.dataset.id;

        if (e.target.classList.contains('delete-btn')) {
            removeBook(bookId);
        } else if (e.target.classList.contains('status-btn')) {
            toggleBookStatus(bookId);
        }
    });
}

function removeBook(id) {
    myLibrary = myLibrary.filter(book => book.id !== id);
    saveLibrary();
    renderLibrary();
}

function toggleBookStatus(id) {
    const book = myLibrary.find(b => b.id === id);
    if (book) {
        book.toggleRead();
        saveLibrary();
        renderLibrary();
    }
}

function renderLibrary() {
    const libraryContainer = document.getElementById('library');
    if (!libraryContainer) return;

    libraryContainer.innerHTML = '';

    myLibrary.forEach(book => {
        const card = document.createElement('div');
        card.className = `book-card ${book.status}`;
        card.dataset.id = book.id;
        card.dataset.shelf = book.shelf;

        const isRead = book.status === 'powerfully-read';

        card.innerHTML = `
            <div class="book-spine-accent"></div>
            <div class="book-content">
                <span class="book-shelf-tag">${escapeHTML(book.shelf)}</span>
                <h3 class="book-title">${escapeHTML(book.title)}</h3>
                <h4 class="book-author">by ${escapeHTML(book.author)}</h4>
                <p class="book-notes">${escapeHTML(book.notes)}</p>
                <div class="book-actions">
                    <button class="status-btn">${isRead ? '✨ Powerfully Read' : '📖 Powerfully Reading'}</button>
                    <button class="delete-btn">🏛️ Return to Shelf</button>
                </div>
            </div>
        `;
        libraryContainer.appendChild(card);
    });
}

function escapeHTML(str) {
    const amp = String.fromCharCode(38);
    return String(str ?? '').replace(/[&<>'"]/g, (tag) => {
        switch (tag) {
            case '&':
                return `${amp}amp;`;
            case '<':
                return `${amp}lt;`;
            case '>':
                return `${amp}gt;`;
            case "'":
                return `${amp}#39;`;
            case '"':
                return `${amp}quot;`;
            default:
                return tag;
        }
    });
}