/* eslint-disable react/jsx-pascal-case */
/* eslint-disable camelcase */

import MenNavbar from '../src/layouts/mentorship/MenNavbar';
import MenHeader from '../src/layouts/mentorship/MenHeader';
import MenContainerbox from '../src/layouts/mentorship/MenContainerbox';
import MenBottomstyle from '../src/layouts/mentorship/MenBottomstyle';
import MenTestimonial from '../src/layouts/mentorship/MenTestimonial';
import MenBottomBanner from '../src/layouts/mentorship/MenBottomBanner';
import MenFooter from '../src/layouts/mentorship/MenFooter';
import MenBenefits from '../src/layouts/mentorship/MenBenefits';
import MenMentoring_style from '../src/layouts/mentorship/MenMentoring_style';
import MenContainer from '../src/layouts/mentorship/MenContainer';

export default function Home() {
    return (
        <div>
            <MenNavbar />
            <MenHeader />
            <MenContainerbox />
            <MenBottomstyle />
            <MenBenefits />
            <MenMentoring_style />
            <MenContainer />
            <MenTestimonial />
            <MenBottomBanner />
            <MenFooter />
        </div>
    );
}
