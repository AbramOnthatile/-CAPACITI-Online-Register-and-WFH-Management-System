import { Download } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { generateCSVReport } from '../../services/reportService';

const data = [
  { name: 'C1', attendance: 88, wfh: 12 },
  { name: 'C2', attendance: 91, wfh: 9 },
  { name: 'C3', attendance: 84, wfh: 18 },
  { name: 'C4', attendance: 93, wfh: 15 },
  { name: 'C5', attendance: 90, wfh: 11 },
];

const AdminReports = () => {
  const handleDownload = async () => {
    await generateCSVReport(data, 'capaciti-admin-summary.csv');
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Reports</p>
          <h2 className="text-3xl font-bold text-slate-900">System Overview</h2>
        </div>
        <button className="btn btn-primary" onClick={handleDownload}><Download className="mr-2 h-4 w-4" />Export</button>
      </div>

      <div className="card p-5">
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid stroke="#e2e8f0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="attendance" fill="#1d4ed8" radius={[6, 6, 0, 0]} />
              <Bar dataKey="wfh" fill="#16a34a" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminReports;
