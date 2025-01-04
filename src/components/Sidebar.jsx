import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  TestTube,
  FileText,
  FileUser,
  Syringe,
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', to: '/dashboard', icon: LayoutDashboard },
  { name: 'Patient', to: '/patient', icon: Users },
  { name: 'Test Orders', to: '/test-orders', icon: TestTube },
  { name: 'Sample Management', to: '/samples', icon: Syringe },
  { name: 'Reports', to: '/reports', icon: FileText },
  {name :'Result Entry',to :'/result', icon: FileUser}
];

 function Sidebar() {
  return (
    <div className="d-flex flex-column vh-100 border-end bg-white" style={{ width: '250px' }}>
      
      <nav className="flex-grow-1 p-3">
        <ul className="nav flex-column">
          {navigation.map((item) => {
            const Icon = item.icon;
            return (
              <li className="nav-item" key={item.name}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `nav-link d-flex align-items-center ${
                      isActive ? 'active text-primary' : 'text-dark'
                    }`
                  }
                  style={{ textDecoration: 'none' }}
                  >
                  <Icon className="me-2" style={{ width: '20px', height: '20px' }} />
                  {item.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;