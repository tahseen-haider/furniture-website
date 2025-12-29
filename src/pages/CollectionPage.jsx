import { CollectionsPageTemplate, ListingPageTemplate } from '@templates';
import { useEffect, useState } from 'react';
import { collectionsAPI } from '@services';

const CollectionPage = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollections = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await collectionsAPI.fetchAll();
        setCollections(res.data?.categories || []);
      } catch (err) {
        console.error('Failed to fetch collections:', err);
        setError(err.message || 'Failed to load collections');
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  return (
    <ListingPageTemplate title="Collections">
      <CollectionsPageTemplate collections={collections} loading={loading} error={error} />
    </ListingPageTemplate>
  );
};

export default CollectionPage;
