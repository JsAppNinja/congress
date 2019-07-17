import React from 'react';
import cx from 'classnames';

import Signup from 'components/Signup';
import DonorCTA from 'components/DonorCTA';
import TopNav from 'components/TopNav';
import { Locale } from 'types/Locale';
import isMobile from 'utils/isMobile';

interface Props {
  mobileMenuIsShown: boolean;
  signupHeader: string;
  fullHeaderIsShown: boolean;
  hideSignup: () => void;
  backgroundColor: 'green' | 'yellow';
  showSignupCloseIcon: boolean;
  donateUrl: string;
  facebookUrl: string;
  twitterUrl: string;
  instagramUrl: string;
  setLocale(locale: Locale): void;
  showFullHeaderAction(): void;
  showSignupAction(): void;
  showMobileMenu(): void;
  hideMobileMenu(): void;
}

const Header: React.FC<Props> = ({
  showMobileMenu,
  hideMobileMenu,
  mobileMenuIsShown,
  signupHeader,
  hideSignup,
  backgroundColor,
  showSignupCloseIcon,
  donateUrl,
  facebookUrl,
  twitterUrl,
  instagramUrl,
  setLocale,
  fullHeaderIsShown,
  showFullHeaderAction
}) => {
  return (
    <div
      className={cx('Header w100 fixed', {
        'vh100 overflow-auto': isMobile() && fullHeaderIsShown,
        'Header__signup-active z3': fullHeaderIsShown
      })}
    >
      <Signup
        hideSignup={hideSignup}
        header={signupHeader}
        backgroundColor={backgroundColor}
        showCloseIcon={showSignupCloseIcon}
      />
      <DonorCTA url={donateUrl} />
      <TopNav
        donateUrl={donateUrl}
        facebookUrl={facebookUrl}
        twitterUrl={twitterUrl}
        instagramUrl={instagramUrl}
        setLocale={setLocale}
        showFullHeader={showFullHeaderAction}
        showMobileMenu={showMobileMenu}
        hideMobileMenu={hideMobileMenu}
        mobileMenuIsShown={mobileMenuIsShown}
      />
    </div>
  );
};

export default Header;
