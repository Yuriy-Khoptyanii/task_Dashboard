import './MobileTable.scss';

import cn from 'classnames';
import { useState } from 'react';

import { moreInfo } from '../../icons';
import { Data } from '../../types/types';
import { ModalMoreInfo } from '../modalMoreInfo/ModalMoreInfo';

type Props = {
  filteredData: Data[];
};

export const MobileTable: React.FC<Props> = ({ filteredData }) => {
  const [user, setUser] = useState<Data | null>(null);

  const clickMoreIcon = (row: Data) => {
    setUser(row);
  };

  const closeModalMoreInfo = () => {
    setUser(null);
  };

  return (
    <table className="MobileTable">
      {!user ? (
        <>
          <thead>
            <tr className="MobileTable__row MobileTable__row--header">
              <th className="MobileTable__row__colName">Name</th>
              <th className="MobileTable__row__colName">Status</th>
              <th className="MobileTable__row__colName">More</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((row) => (
              <tr key={row.customerName} className="MobileTable__row">
                <td className="MobileTable__row__strName">{row.customerName}</td>
                <td className="MobileTable__row__strName">
                  <div
                    className={cn('status', {
                      active: row.status === 'Active',
                      inActive: row.status !== 'Active',
                    })}
                  >
                    {row.status}
                  </div>
                </td>
                <td className="MobileTable__row__strName">
                  <button className="moreInfo" onClick={() => clickMoreIcon(row)}>
                    <img className="moreInfo__svg" src={moreInfo} alt="MoreInfo"></img>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </>
      ) : (
        <ModalMoreInfo user={user} closeModalMoreInfo={closeModalMoreInfo} />
      )}
    </table>
  );
};
