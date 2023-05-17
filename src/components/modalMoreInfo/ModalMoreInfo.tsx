import { close } from '../../icons';
import { Data } from '../../types/types';

type Props = {
  user: Data | null;
  closeModalMoreInfo: () => void;
};

export const ModalMoreInfo: React.FC<Props> = ({ user, closeModalMoreInfo }) => {
  if (!user) {
    return null;
  }

  return (
    <table className="MobileTable">
      <tbody>
        <tr className="MobileTable__row">
          <td className="MobileTable__row__strName">
            <button onClick={closeModalMoreInfo} className="moreInfo">
              <img src={close} alt="closeButton" />
            </button>
          </td>
        </tr>
        <tr className="MobileTable__row">
          <td className="MobileTable__row__colName">Company</td>
          <td className="MobileTable__row__strName">{user.company}</td>
        </tr>
        <tr className="MobileTable__row">
          <td className="MobileTable__row__colName">Phone Number</td>
          <td className="MobileTable__row__strName">{user.phoneNumber}</td>
        </tr>
        <tr className="MobileTable__row">
          <td className="MobileTable__row__colName">Email</td>
          <td className="MobileTable__row__strName">{user.email}</td>
        </tr>
        <tr className="MobileTable__row">
          <td className="MobileTable__row__colName">Country</td>
          <td className="MobileTable__row__strName">{user.country}</td>
        </tr>
      </tbody>
    </table>
  );
};
