import { useApp } from '../../context/AppContext';

const AuditLogs = () => {
  const { auditLogs = [] } = useApp();
  const entries = Array.isArray(auditLogs) ? auditLogs : [];

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Audit</p>
        <h2 className="text-3xl font-bold text-slate-900">Audit Logs</h2>
      </div>

      <div className="space-y-3">
        {entries.map((log) => (
          <div key={log.id} className="card p-4">
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-semibold text-slate-800">{log.action}</p>
                <p className="text-sm text-slate-500">{log.user}</p>
              </div>
              <span className="text-xs uppercase tracking-[0.2em] text-slate-400">{log.timestamp}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuditLogs;
