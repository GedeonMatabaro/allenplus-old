// app/not-found.tsx
import { getTranslations } from 'next-intl/server';
import Footer from '@/components/Footer';
import { Navigation } from '@/components/navigation';

export default async function NotFound() {
  const t = await getTranslations('NotFound');

  return (
    <div className="flex min-h-screen min-w-[320px] flex-col w-full">
      <Navigation />
      <div>
        <main className="my-12 w-full space-y-3 text-center">
          <h1 className="text-3xl font-bold">{t('heading')}</h1>
          <p>{t('description')}</p>
        </main>
      </div>
      <Footer />
    </div>
  );
}
