import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, UserPlus, Droplet } from 'lucide-react';
import StatCard from '../components/statCard';
import Loading from '../components/loading';
import ErrorMessage from '../components/ErrorMessage';
import Button from '../components/Button';
import { getStats } from '../services/donorApi';

export function Home() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setLoading(true);
        setError(null);

        // Get statistics from backend
        const data = await getStats();

        setStats(data);
      } catch (err) {
        console.error('Error loading homepage stats:', err);
        setError(
          'Unable to load community statistics. Please check API connection.'
        );
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="space-y-16 py-4">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-red-950 to-gray-950 text-white p-8 md:p-14 shadow-2xl border border-red-900/30 text-left">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-red-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-widest">
            <Droplet className="w-4 h-4 text-red-500 animate-bounce" />
            <span>Community Blood Donation Platform</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
            🩸 LifeLink
          </h1>

          <p className="text-xl sm:text-2xl font-bold text-red-400">
            Find a donor. Offer help. Save a life.
          </p>

          <p className="text-gray-300 text-base sm:text-lg font-normal leading-relaxed max-w-2xl">
            A simple community platform connecting voluntary blood donors with people searching for blood support.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Link to="/find-donor" className="w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto py-3 px-6 text-sm shadow-lg">
                <Search className="w-4 h-4 mr-2" />
                <span>Find a Donor</span>
              </Button>
            </Link>

            <Link to="/become-donor" className="w-full sm:w-auto">
              <Button variant="secondary" className="w-full sm:w-auto py-3 px-6 text-sm">
                <UserPlus className="w-4 h-4 mr-2" />
                <span>Become a Donor</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* HOMEPAGE STATISTICS */}
      <section className="space-y-6 text-left">
        <div className="border-b border-gray-200 dark:border-gray-800 pb-3">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Community Statistics
          </h2>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Real-time numbers provided by the LifeLink API
          </p>
        </div>

        {loading ? (
          <Loading message="Loading community statistics..." />
        ) : error ? (
          <ErrorMessage
            title="Failed to Load Statistics"
            message={error}
            onRetry={() => window.location.reload()}
          />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard
              title="Total Donors"
              value={stats?.totalDonors}
              subtitle="Registered Voluntary Donors"
              emoji="🩸"
            />

            <StatCard
              title="Cities Covered"
              value={stats?.citiesCovered}
              subtitle="Across India"
              emoji="🌍"
            />

            <StatCard
              title="Blood Groups"
              value={stats?.bloodGroups}
              subtitle="All Standard Blood Types"
              emoji="❤️"
            />
          </div>
        )}
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-8 md:p-12 text-left space-y-8 shadow-sm">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs font-bold text-red-600 dark:text-red-400 uppercase tracking-widest">
            3-Step Process
          </span>

          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            How It Works
          </h2>

          <p className="text-xs text-gray-500 dark:text-gray-400">
            Simple coordination for voluntary blood donors and seekers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700 space-y-3">
            <span className="inline-block px-3 py-1 rounded-xl bg-red-600 text-white font-extrabold text-xs">
              01
            </span>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Become a Donor
            </h3>

            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              Register your basic information so people in need can discover your willingness to help.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700 space-y-3">
            <span className="inline-block px-3 py-1 rounded-xl bg-red-600 text-white font-extrabold text-xs">
              02
            </span>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Find a Donor
            </h3>

            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              Search by blood group and city to locate matching voluntary donors near you.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700 space-y-3">
            <span className="inline-block px-3 py-1 rounded-xl bg-red-600 text-white font-extrabold text-xs">
              03
            </span>

            <h3 className="text-lg font-bold text-gray-900 dark:text-white">
              Connect
            </h3>

            <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
              View donor details and contact them directly to coordinate emergency blood needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;