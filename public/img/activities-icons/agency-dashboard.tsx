import Image from 'next/image';

import { Card } from '@/components/card';
// import { AccountUserCard } from '@app/features/accounts';
// import { WorkflowTasksCard } from '@app/features/workflows';

const dummyActivities = [
  {
    icon: 'createdService',
    title:
      'You created a service company (Robiu Oil and Gas)',
    date: 'yesterday',
  },
  {
    icon: 'createdOperator',
    title: 'You created an operator (Robiu Oil and Gas)',
    date: 'yesterday',
  },
  {
    icon: 'logged',
    title: 'You logged in to your account',
    date: 'yesterday',
  },
  {
    icon: 'good',
    title: 'You Approved an Ncec Application (EA-FFFFF)',
    date: 'yesterday',
  },
];

const quickLinks = [
  {
    icon: 'profile-2user',
    title: 'Relationship Manager',
    url: '',
  },
  {
    icon: 'call-calling',
    title: 'Help Desk',
    url: '',
  },
  {
    icon: 'document-filter',
    title: 'Manage Pages',
    url: '',
  },
  {
    icon: 'user-tick',
    title: 'Individual Report',
    url: '',
  },
  {
    icon: 'activity',
    title: 'Service Companies Report',
    url: '',
  },
  {
    icon: 'briefcase',
    title: 'Operators Report',
    url: '',
  },
  {
    icon: 'user-tag',
    title: 'User Management',
    url: '',
  },
];

export function AgencyDashboard() {
  return (
    <div>
      <div className="my-5 py-5">
        <h1 className="font-extrabold text-xl text-tx-dark">
          Dashboard
        </h1>
        <p className="text-md font-medium text-tx-light-dark">
          Welcome to NOGICJQS Portal
        </p>
      </div>

      {/* <AccountUserCard /> */}

      <div className="my-10 grid lg:grid-cols-2 gap-5">
        {/* <WorkflowTasksCard /> */}

        <div className="bg-white rounded-xl shadow-sm">
          <div className="px-4 py-3 flex items-center justify-between">
            <div>
              <h3 className="md:text-lg text-tx-dark font-bold">
                Recent Activities
              </h3>
              <p className="text-tx-light-dark text-sm font-base">
                Get a direction with using the portal
              </p>
            </div>
            <div>
              {/* change to link */}
              <p className="text-green whitespace-nowrap font-semibold text-xs underline cursor-pointer">
                View all activies
              </p>
            </div>
          </div>
          <hr className="bg-gray-300" />
          <ul className="my-3">
            {dummyActivities.map((data, index) => (
              <li
                key={index}
                className="flex px-4 py-2 space-x-4 items-center"
              >
                {/* image here */}
                <Image
                  alt={data.title}
                  src={`/img/dashboard/activities-icons/${data.icon}.svg`}
                  className="fill-current text-red"
                  height={40}
                  width={40}
                />
                <div>
                  <p className="text-sm font-semibold text-tx-dark">
                    {data.title}
                  </p>
                  <p className="text-tx-light-dark text-sm ">
                    {data.date}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="my-10">
        <Card>
          <div>
            <h3 className="text-md text-tx-dark font-bold">
              Quick Links
            </h3>
            <p className="text-tx-light-dark text-sm font-base">
              Get a direction with using the portal
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-4 my-5">
            {quickLinks.map((data, index) => (
              <div
                key={index}
                className="rounded-lg shadow-md px-2 py-2 border-[1px] border-[#E5E7EB] bg-[#F9FAFB] flex flex-col justify-center items-center"
              >
                <Image
                  alt={data.title}
                  src={`/img/dashboard/${data.icon}.png`}
                  height={30}
                  width={30}
                />
                <span className="text-center text-xs text-tx-light-dark">
                  {data.title}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
