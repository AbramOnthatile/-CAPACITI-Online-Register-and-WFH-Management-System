import { useApp } from '../../context/AppContext';
import StatusBadge from '../../components/common/StatusBadge';

const Escalations = () => {
  const { escalations } = useApp();

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Escalations</p>
        <h2 className="text-3xl font-bold text-slate-900">Escalation Dashboard</h2>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3">Candidate</th>
                <th className="px-4 py-3">Issue</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Severity</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Assigned To</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {escalations.map((item) => (
                <tr key={item.id} className="border-t border-slate-200 text-slate-700">
                  <td className="px-4 py-3">{item.candidate}</td>
                  <td className="px-4 py-3">{item.issue}</td>
                  <td className="px-4 py-3">{item.date}</td>
                  <td className="px-4 py-3"><StatusBadge status={item.severity} /></td>
                  <td className="px-4 py-3"><StatusBadge status={item.status} /></td>
                  <td className="px-4 py-3">{item.assignedTo}</td>
                  <td className="px-4 py-3"><button className="btn btn-secondary px-2 py-1 text-xs">Review</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Escalations;
