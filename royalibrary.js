/**
 * THE ROYAL LIBRARY - BIBLIOPHILE PRINCESS SANCTUARY (v9-bibliophile-princess)
 * Pure royal collection: Ancient Classics, Scholarly Fairy Tales, Star Traveller,
 * Courtly Romances, Etiquette & Statecraft, and Shared Readings with Prince Christopher.
 */

const LIBRARY_VERSION = 'v9-bibliophile-princess-royal';

// Book Constructor
class Book {
    constructor(id, title, author, shelf, status, notes) {
        this.id = id || generateId();
        this.title = title;
        this.author = author;
        this.shelf = shelf;
        this.status = status || 'powerfully-read'; // 'powerfully-read' or 'powerfully-reading'
        this.notes = notes || '';
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
        myLibrary = rawSeedData.map(item => new Book(item.id, item.title, item.author, item.shelf, item.status, item.notes));
        saveLibrary();
    } else {
        try {
            const parsed = JSON.parse(savedData);
            myLibrary = parsed.map(item => new Book(item.id, item.title, item.author, item.shelf, item.status, item.notes));
        } catch (e) {
            myLibrary = rawSeedData.map(item => new Book(item.id, item.title, item.author, item.shelf, item.status, item.notes));
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
    initUIEventListeners();
    renderLibrary();
});

function initPortalEngine() {
    const portal = document.getElementById('threshold-portal');
    if (!portal) return;

    function shatterPortal() {
        portal.classList.add('shattered');
        setTimeout(() => portal.style.display = 'none', 800);
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && portal.style.display !== 'none') {
            shatterPortal();
        }
    });

    portal.addEventListener('click', shatterPortal);
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
        card.dataset.shelf = book.shelf; // Binds shelf name for CSS styling

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
    return str.replace(/[&<>'"]/g, 
        tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
    );
}