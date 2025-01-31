// logs/[id]/page.tsx
import Home from '@/app/_components/Home';
import LogService from '../../_services/logService';

// This is required for dynamic routing in runtime
export const dynamicParams = true;

export async function generateStaticParams() {
    const logService = new LogService();
    const logs = await logService.fetchLogs();
    return logs.map(log => ({ id: log.id }));
}

export default function Page({ params }: { params: { id: string } }) {
    const { id } = params;
    return <Home id={id} />
};