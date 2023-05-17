import './Table.scss';

import cn from 'classnames';

import { Data } from '../../types/types';

const columnName = [
  'Customer Name',
  'Company',
  'Phone Number',
  'Email',
  'Country',
  'Status',
];

type Props = {
  filteredData: Data[];
};

export const Table: React.FC<Props> = ({ filteredData }) => {
  return (
    <table className="table">
      <thead>
        <tr className="table__row table__row--header">
          {columnName.map((name) => {
            return (
              <th key={name} className="table__row__colName">
                {name}
              </th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {filteredData.map((row) => (
          <tr key={row.customerName} className="table__row">
            <td className="table__row__strName">{row.customerName}</td>
            <td className="table__row__strName">{row.company}</td>
            <td className="table__row__strName">{row.phoneNumber}</td>
            <td className="table__row__strName">{row.email}</td>
            <td className="table__row__strName">{row.country}</td>
            <td className="table__row__strName">
              <div
                className={cn('status', {
                  active: row.status === 'Active',
                  inActive: row.status !== 'Active',
                })}
              >
                {row.status}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
