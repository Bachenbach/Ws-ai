import Chat from '@/components/Chat';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  const session = await getServerSession();
  
  if (!session) {
    redirect('/auth/signin');
  }

  return (
    <main className="min-h-screen bg-white">
      <Chat />
    </main>
  );
}
