import { BarChart3, Users, ShieldCheck, Clock3, FileText, AlertTriangle } from 'lucide-react';
import { AreaChart, Area, ResponsiveContainer, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import StatCard from '../../components/common/StatCard';
import Card from '../../components/common/Card';

const adminData = [
  { name: 'Mon', attendance: 40, wfh: 12 },
  { name: 'Tue', attendance: 38, wfh: 14 },
  { name: 'Wed', attendance: 43, wfh: 10 },
  { name: 'Thu', attendance: 41, wfh: 18 },
  { name: 'Fri', attendance: 44, wfh: 16 },
];

const AdminDashboard = () => (
  <div className="space-y-6">
    <div>
      <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Admin</p>
      <h2 className="text-3xl font-bold text-slate-900">Admin Dashboard</h2>
    </div>

    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-6">
      <StatCard title="Total Candidates" value="10" tone="primary" icon={Users} />
      <StatCard title="Total Tech Champs" value="3" tone="success" icon={ShieldCheck} />
      <StatCard title="Active Users" value="87%" tone="warning" icon={BarChart3} />
      <StatCard title="Attendance Today" value="82%" tone="primary" icon={Clock3} />
      <StatCard title="Pending WFH" value="8" tone="warning" icon={FileText} />
      <StatCard title="Open Escalations" value="4" tone="danger" icon={AlertTriangle} />
    </div>

    <div className="grid gap-6 xl:grid-cols-3">
      <Card title="Attendance" className="xl:col-span-2">
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={adminData}>
              <defs>
                <linearGradient id="attendanceAdmin" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="5%" stopColor="#1d4ed8" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#1d4ed8" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#e2e8f0" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="attendance" stroke="#1d4ed8" fill="url(#attendanceAdmin)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </Card>

      <Card title="System activity">
        <div className="space-y-3">
          {[
            'Candidate clocked in for the day',
            'WFH request approved by mentor',
            'Admin changed user role',
            'Escalation assigned to champion',
          ].map((item) => (
            <div key={item} className="rounded-xl border border-slate-200 p-3 text-sm text-slate-700">{item}</div>
          ))}
        </div>
      </Card>
    </div>
  </div>
);

export default AdminDashboard;
