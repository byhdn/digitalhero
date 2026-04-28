import { useEffect, useMemo, useState } from 'react';
import { Link, Navigate, Route, Routes, useNavigate, useParams } from 'react-router-dom';

const PAGE_SIZE = 3;

function useMockData() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    let active = true;

    async function load() {
      try {
        const response = await fetch('/data/mock.json');
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const json = await response.json();
        if (active) {
          setItems(json.items ?? []);
          setError('');
        }
      } catch (err) {
        if (active) {
          setError(`Erreur de chargement des données: ${err.message}`);
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    load();
    return () => {
      active = false;
    };
  }, []);

  return { items, loading, error };
}

function HomePage({ items, loading, error }) {
  const { page = '1' } = useParams();
  const navigate = useNavigate();
  const pageNumber = Number.parseInt(page, 10);
  const safePage = Number.isFinite(pageNumber) && pageNumber > 0 ? pageNumber : 1;

  const totalPages = useMemo(() => Math.max(1, Math.ceil(items.length / PAGE_SIZE)), [items.length]);

  useEffect(() => {
    if (safePage !== pageNumber) {
      navigate(`/page/${safePage}`, { replace: true });
      return;
    }
    if (safePage > totalPages) {
      navigate(`/page/${totalPages}`, { replace: true });
    }
  }, [navigate, pageNumber, safePage, totalPages]);

  const startIndex = (safePage - 1) * PAGE_SIZE;
  const paginatedItems = items.slice(startIndex, startIndex + PAGE_SIZE);

  if (loading) return <p>Chargement des données…</p>;
  if (error) return <p role="alert">{error}</p>;

  return (
    <main>
      <h1>Catalogue mock (sans backend)</h1>
      <p>Source: <code>public/data/mock.json</code></p>

      <ul className="card-grid">
        {paginatedItems.map((item) => (
          <li key={item.id} className="card">
            <h2>{item.title}</h2>
            <p>{item.summary}</p>
            <Link to={`/item/${item.id}`}>Voir le détail</Link>
          </li>
        ))}
      </ul>

      <nav aria-label="Pagination" className="pagination">
        <button
          type="button"
          onClick={() => navigate(`/page/${Math.max(1, safePage - 1)}`)}
          disabled={safePage <= 1}
        >
          Précédent
        </button>
        <span>Page {safePage} / {totalPages}</span>
        <button
          type="button"
          onClick={() => navigate(`/page/${Math.min(totalPages, safePage + 1)}`)}
          disabled={safePage >= totalPages}
        >
          Suivant
        </button>
      </nav>
    </main>
  );
}

function DetailPage({ items, loading, error }) {
  const { id } = useParams();

  if (loading) return <p>Chargement des données…</p>;
  if (error) return <p role="alert">{error}</p>;

  const item = items.find((entry) => String(entry.id) === id);

  if (!item) {
    return (
      <main>
        <h1>Élément introuvable</h1>
        <Link to="/page/1">Retour à la liste</Link>
      </main>
    );
  }

  return (
    <main>
      <h1>{item.title}</h1>
      <p>{item.summary}</p>
      <p><strong>Catégorie:</strong> {item.category}</p>
      <Link to="/page/1">Retour à la liste</Link>
    </main>
  );
}

export default function App() {
  const dataState = useMockData();

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/page/1" replace />} />
      <Route path="/page/:page" element={<HomePage {...dataState} />} />
      <Route path="/item/:id" element={<DetailPage {...dataState} />} />
      <Route path="*" element={<Navigate to="/page/1" replace />} />
    </Routes>
  );
}
