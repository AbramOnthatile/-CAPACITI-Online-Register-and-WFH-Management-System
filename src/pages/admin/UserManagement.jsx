import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import StatusBadge from '../../components/common/StatusBadge';

const UserManagement = () => {
  const { users, updateUser } = useApp();
  const [filterRole, setFilterRole] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

  const filtered = users.filter((user) => {
    const roleMatch = filterRole === 'All' || user.role === filterRole;
    const statusMatch = filterStatus === 'All' || user.status === filterStatus;
    return roleMatch && statusMatch;
  });

  const toggleStatus = (id, currentStatus) => {
    updateUser(id, { status: currentStatus === 'Active' ? 'Inactive' : 'Active' });
  };

  return (
    <div className="space-y-6">
      <div>
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Users</p>
        <h2 className="text-3xl font-bold text-slate-900">User Management</h2>
      </div>

      <div className="card p-4">
        <div className="grid gap-4 md:grid-cols-3">
          <select className="input" value={filterRole} onChange={(e) => setFilterRole(e.target.value)}>
            <option value="All">Role</option>
            <option value="candidate">Candidate</option>
            <option value="tech-champion">Tech Champion</option>
            <option value="admin">Admin</option>
          </select>
          <select className="input" value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="All">Status</option>
            <option value="Active">Active</option>
            <option value="Away">Away</option>
            <option value="Inactive">Inactive</option>
          </select>
          <select className="input">
            <option>Cohort</option>
          </select>
        </div>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-slate-50 text-slate-600">
              <tr>
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Role</th>
                <th className="px-4 py-3">Cohort</th>
                <th className="px-4 py-3">Status</th>
                <th className="px-4 py-3">Created</th>
                <th className="px-4 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((user) => (
                <tr key={user.id} className="border-t border-slate-200 text-slate-700">
                  <td className="px-4 py-3">{user.fullName}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">{user.role}</td>
                  <td className="px-4 py-3">{user.cohort}</td>
                  <td className="px-4 py-3"><StatusBadge status={user.status || 'Active'} /></td>
                  <td className="px-4 py-3">2026-09-01</td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2">
                      <button className="btn btn-secondary px-2 py-1 text-xs">View</button>
                      <button className="btn btn-secondary px-2 py-1 text-xs">Edit</button>
                      <button className="btn btn-primary px-2 py-1 text-xs" onClick={() => toggleStatus(user.id, user.status)}>{user.status === 'Active' ? 'Deactivate' : 'Activate'}</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
