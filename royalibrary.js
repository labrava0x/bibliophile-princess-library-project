const LIBRARY_VERSION = 'v5-bibliophile-princess';

// Book Constructor
class Book {
    constructor(id, title, author, shelf, status, notes) {
        this.id = id || generateId();
        this.title = title;
        this.author = author;
        this.shelf = shelf;
        this.status = status; // 'absorbed' or 'reading'
        this.notes = notes || '';
    }

    toggleRead() {
        this.status = this.status === 'absorbed' ? 'reading' : 'absorbed';
    }
}

// Safe ID Fallback Engine (prevents crypto.randomUUID() failures under file:// protocol)
function generateId() {
    if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
        try {
            return crypto.randomUUID();
        } catch (e) {
            // Fallback if security context restricts randomUUID
        }
    }
    // RFC4122-compliant fallback generator
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

// Raw Seed Data: Complete Sanctuary Collections
const rawSeedData = [
    // --- Gothic & Poetic Soul ---
    {
        id: generateId(),
        title: "The Complete Tales and Poems",
        author: "Edgar Allan Poe",
        shelf: "Gothic & Poetic Soul",
        status: "absorbed",
        notes: "Macabre masterpieces and rhythmic darkness."
    },
    {
        id: generateId(),
        title: "Dracula",
        author: "Bram Stoker",
        shelf: "Gothic & Poetic Soul",
        status: "absorbed",
        notes: "Epistolary dread and eternal shadows."
    },
    {
        id: generateId(),
        title: "Carmilla",
        author: "Sheridan Le Fanu",
        shelf: "Gothic & Poetic Soul",
        status: "absorbed",
        notes: "The foundational whisper of gothic vampiric melancholy."
    },
    {
        id: generateId(),
        title: "The Haunting of Hill House",
        author: "Shirley Jackson",
        shelf: "Gothic & Poetic Soul",
        status: "absorbed",
        notes: "Architecture of fear and fractured psyches."
    },
    {
        id: generateId(),
        title: "The Mysteries of Udolpho",
        author: "Ann Radcliffe",
        shelf: "Gothic & Poetic Soul",
        status: "reading",
        notes: "The height of Radcliffe's atmospheric terror."
    },
    {
        id: generateId(),
        title: "Frankenstein",
        author: "Mary Shelley",
        shelf: "Gothic & Poetic Soul",
        status: "absorbed",
        notes: "Promethean hubris and tragic isolation."
    },
    {
        id: generateId(),
        title: "No Longer Human",
        author: "Osamu Dazai",
        shelf: "Gothic & Poetic Soul",
        status: "absorbed",
        notes: "A harrowing confession of alienation."
    },
    {
        id: generateId(),
        title: "The Little Prince",
        author: "Antoine de Saint-Exupéry",
        shelf: "Gothic & Poetic Soul",
        status: "absorbed",
        notes: "What is essential is invisible to the eye."
    },
    {
        id: generateId(),
        title: "The Master and Margarita",
        author: "Mikhail Bulgakov",
        shelf: "Gothic & Poetic Soul",
        status: "absorbed",
        notes: "Satirical magic realism in Soviet Moscow."
    },

    // --- Heavy Russian Toska ---
    {
        id: generateId(),
        title: "Notes from Underground",
        author: "Fyodor Dostoevsky",
        shelf: "Heavy Russian Toska",
        status: "absorbed",
        notes: "The raw manifesto of existential spite."
    },
    {
        id: generateId(),
        title: "Toska (Short Stories)",
        author: "Anton Chekhov",
        shelf: "Heavy Russian Toska",
        status: "absorbed",
        notes: "An ache for which there is no name."
    },
    {
        id: generateId(),
        title: "The Overcoat",
        author: "Nikolai Gogol",
        shelf: "Heavy Russian Toska",
        status: "absorbed",
        notes: "Absurdist tragedy of the forgotten clerk."
    },
    {
        id: generateId(),
        title: "A Hero of Our Time",
        author: "Mikhail Lermontov",
        shelf: "Heavy Russian Toska",
        status: "reading",
        notes: "Byronic disillusionment on the Caucasian frontier."
    },
    {
        id: generateId(),
        title: "First Love and Asya",
        author: "Ivan Turgenev",
        shelf: "Heavy Russian Toska",
        status: "absorbed",
        notes: "Lyrical heartbreak and memory."
    },

    // --- Existential & Philosophical ---
    {
        id: generateId(),
        title: "The Metamorphosis",
        author: "Franz Kafka",
        shelf: "Existential & Philosophical",
        status: "absorbed",
        notes: "Alienation rendered literal."
    },
    {
        id: generateId(),
        title: "The Trial",
        author: "Franz Kafka",
        shelf: "Existential & Philosophical",
        status: "reading",
        notes: "Navigating the labyrinth of bureaucratic guilt."
    },
    {
        id: generateId(),
        title: "The Stranger",
        author: "Albert Camus",
        shelf: "Existential & Philosophical",
        status: "absorbed",
        notes: "The scorching sun and the absurd."
    },
    {
        id: generateId(),
        title: "Kafka on the Shore",
        author: "Haruki Murakami",
        shelf: "Existential & Philosophical",
        status: "absorbed",
        notes: "Metaphysical wanderings and flying fish."
    },
    {
        id: generateId(),
        title: "Norwegian Wood",
        author: "Haruki Murakami",
        shelf: "Existential & Philosophical",
        status: "absorbed",
        notes: "Melancholic youth and loss."
    },
    {
        id: generateId(),
        title: "Never Let Me Go",
        author: "Kazuo Ishiguro",
        shelf: "Existential & Philosophical",
        status: "absorbed",
        notes: "Dystopian tenderness and fading time."
    },
    {
        id: generateId(),
        title: "Breasts and Eggs",
        author: "Mieko Kawakami",
        shelf: "Existential & Philosophical",
        status: "absorbed",
        notes: "Modern identity and bodily autonomy."
    },

    // --- Tactical & Unyielding Core ---
    {
        id: generateId(),
        title: "The Art of War",
        author: "Sun Tzu",
        shelf: "Tactical & Unyielding Core",
        status: "absorbed",
        notes: "Supreme excellence consists in breaking the enemy's resistance without fighting."
    },
    {
        id: generateId(),
        title: "The Book of Five Rings",
        author: "Miyamoto Musashi",
        shelf: "Tactical & Unyielding Core",
        status: "absorbed",
        notes: "Strategy, discipline, and absolute focus."
    },
    {
        id: generateId(),
        title: "Can't Hurt Me",
        author: "David Goggins",
        shelf: "Tactical & Unyielding Core",
        status: "absorbed",
        notes: "Forging mental toughness against all odds."
    },
    {
        id: generateId(),
        title: "Endurance: Shackleton's Incredible Voyage",
        author: "Alfred Lansing",
        shelf: "Tactical & Unyielding Core",
        status: "absorbed",
        notes: "Unbreakable human will amidst Antarctic ice."
    },

    // --- Ancient Classics ---
    {
        id: generateId(),
        title: "The Histories",
        author: "Herodotus",
        shelf: "Ancient Classics",
        status: "absorbed",
        notes: "The monumental inquiry into the customs, wars, and marvels of the ancient world."
    },
    {
        id: generateId(),
        title: "Parallel Lives",
        author: "Plutarch",
        shelf: "Ancient Classics",
        status: "absorbed",
        notes: "Biographical portraits examining virtue and vice across Greek and Roman titans."
    },
    {
        id: generateId(),
        title: "The Annals",
        author: "Tacitus",
        shelf: "Latin Classics",
        status: "reading",
        notes: "A piercing, unsparing chronicle of imperial power, corruption, and survival."
    },
    {
        id: generateId(),
        title: "Meditations",
        author: "Marcus Aurelius",
        shelf: "Ancient Greek",
        status: "absorbed",
        notes: "Private Stoic reflections on duty, resilience, and the quiet center of the mind."
    },
    {
        id: generateId(),
        title: "The Art of War (Classic Edition)",
        author: "Sun Tzu",
        shelf: "Traditional Chinese",
        status: "absorbed",
        notes: "Timeless wisdom on strategic adaptability, timing, and psychological mastery."
    },
    {
        id: generateId(),
        title: "Records of the Grand Historian",
        author: "Sima Qian",
        shelf: "Traditional Chinese",
        status: "reading",
        notes: "The sweeping chronicle of dynasties past, bridging myth and empirical history."
    },
    {
        id: generateId(),
        title: "The Aeneid",
        author: "Virgil",
        shelf: "Latin Classics",
        status: "absorbed",
        notes: "The epic verse of fate, empire, and the long road to founding a new home."
    },
    {
        id: generateId(),
        title: "Tao Te Ching",
        author: "Laozi",
        shelf: "Traditional Chinese",
        status: "absorbed",
        notes: "Poetic wisdom on effortless action (wu-wei) and alignment with the universe."
    },

    // --- Scholarly Fairy Tales & Star Traveller ---
    {
        id: generateId(),
        title: "The Blue Fairy Book",
        author: "Andrew Lang",
        shelf: "Scholarly Fairy Tales",
        status: "absorbed",
        notes: "The foundational folkloric collection gathering timeless European fairy tales with scholarly elegance."
    },
    {
        id: generateId(),
        title: "Grimms' Fairy Tales",
        author: "Brothers Grimm",
        shelf: "Scholarly Fairy Tales",
        status: "absorbed",
        notes: "The unvarnished, mythic German folk and fairy tales compiled with historical depth and dark poetic resonance."
    },
    {
        id: generateId(),
        title: "The Star Traveller",
        author: "Sanctuary Archives",
        shelf: "Scholarly Fairy Tales",
        status: "absorbed",
        notes: "The crown jewel of cosmic odysseys, charting voyages across distant starlit galaxies and dream dimensions."
    },
    {
        id: generateId(),
        title: "The Uses of Enchantment",
        author: "Bruno Bettelheim",
        shelf: "Scholarly Fairy Tales",
        status: "reading",
        notes: "A profound psychoanalytic exploration of the emotional and psychological necessity of fairy tales."
    },
    {
        id: generateId(),
        title: "Fairy Tales and the Art of Subversion",
        author: "Jack Zipes",
        shelf: "Scholarly Fairy Tales",
        status: "absorbed",
        notes: "A critical examination of how folk and fairy tales reflect social history, magic, and cultural rebellion."
    },

    // --- Courtly Romances & Medieval Masterpieces ---
    {
        id: generateId(),
        title: "The Romance of the Rose",
        author: "Guillaume de Lorris and Jean de Meun",
        shelf: "Courtly Romances",
        status: "absorbed",
        notes: "The landmark medieval allegorical dream vision on courtly love and human desire."
    },
    {
        id: generateId(),
        title: "Le Morte d'Arthur",
        author: "Sir Thomas Malory",
        shelf: "Courtly Romances",
        status: "absorbed",
        notes: "The quintessential epic chronicling the rise and tragic fall of King Arthur and the Round Table."
    },
    {
        id: generateId(),
        title: "The Name of the Rose",
        author: "Umberto Eco",
        shelf: "Courtly Romances",
        status: "absorbed",
        notes: "A labyrinthine medieval murder mystery woven with semiotics, heresy, and monastic library secrets."
    },

    // --- Etiquette & Statecraft ---
    {
        id: generateId(),
        title: "The Prince",
        author: "Niccolò Machiavelli",
        shelf: "Etiquette & Statecraft",
        status: "absorbed",
        notes: "The unflinching tactical treatise on power, pragmatism, and political survival."
    },
    {
        id: generateId(),
        title: "The Book of the Courtier",
        author: "Baldassare Castiglione",
        shelf: "Etiquette & Statecraft",
        status: "absorbed",
        notes: "The definitive Renaissance guide to grace, wit, sprezzatura, and aristocratic behavior."
    },
    {
        id: generateId(),
        title: "Galateo: The Rules of Good Behaviour",
        author: "Giovanni della Casa",
        shelf: "Etiquette & Statecraft",
        status: "reading",
        notes: "A witty, foundational Renaissance manual on manners, social harmony, and civilized grace."
    }
];

// LocalStorage Manager with Version Gate
let myLibrary = [];

function loadLibrary() {
    const savedVersion = localStorage.getItem('library_version');
    const savedData = localStorage.getItem('myLibrary');

    if (savedVersion !== LIBRARY_VERSION || !savedData) {
        // Fresh seed migration
        myLibrary = rawSeedData.map(item => new Book(item.id, item.title, item.author, item.shelf, item.status, item.notes));
        saveLibrary();
    } else {
        try {
            const parsed = JSON.parse(savedData);
            // Re-instantiate through Book prototype to attach methods like toggleRead()
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

// Threshold Portal & Idle Interceptor Engine
document.addEventListener('DOMContentLoaded', () => {
    loadLibrary();
    initPortalEngine();
    initUIEventListeners();
    renderLibrary();
});

function initPortalEngine() {
    const portal = document.getElementById('threshold-portal');
    if (!portal) return;

    let inactivityTimer;

    function shatterPortal() {
        portal.classList.add('shattered');
        setTimeout(() => portal.style.display = 'none', 800);
    }

    // Global Enter key intercept
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && portal.style.display !== 'none') {
            shatterPortal();
        }
    });

    portal.addEventListener('click', shatterPortal);

    // Inactivity detector for idle curtain return (60 seconds)
    function resetInactivityTimer() {
        clearTimeout(inactivityTimer);
        inactivityTimer = setTimeout(() => {
            if (portal.classList.contains('shattered')) {
                portal.classList.remove('shattered');
                portal.style.display = 'flex';
            }
        }, 60000);
    }

    ['mousemove', 'keydown', 'scroll', 'touchstart'].forEach(evt => {
        document.addEventListener(evt, resetInactivityTimer, { passive: true });
    });

    // Tab visibility change intercept
    document.addEventListener('visibilitychange', () => {
        if (document.hidden) {
            portal.classList.remove('shattered');
            portal.style.display = 'flex';
        }
    });
}

// UI Event Handlers & Delegation
function initUIEventListeners() {
    const libraryContainer = document.getElementById('library');
    if (!libraryContainer) return;

    // Centralized Event Delegation for Shelf Grid
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
        card.className = `book-card ${book.status === 'absorbed' ? 'absorbed' : 'reading'}`;
        card.dataset.id = book.id;

        card.innerHTML = `
            <div class="book-spine-accent"></div>
            <div class="book-content">
                <span class="book-shelf-tag">${escapeHTML(book.shelf)}</span>
                <h3 class="book-title">${escapeHTML(book.title)}</h3>
                <h4 class="book-author">by ${escapeHTML(book.author)}</h4>
                <p class="book-notes">${escapeHTML(book.notes)}</p>
                <div class="book-actions">
                    <button class="status-btn">${book.status === 'absorbed' ? '✨ Absorbed' : '📖 Reading'}</button>
                    <button class="delete-btn">🔥 Return to Void</button>
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