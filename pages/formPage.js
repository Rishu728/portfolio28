/* eslint-disable react/jsx-pascal-case */
/* eslint-disable camelcase */
import React from 'react';
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

const FormPage = () => (
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
export default FormPage;

if (process.env.NODE_ENV !== 'production') {
    if (typeof window !== 'undefined') {
        // This code will only run on the client-side in development mode
        // It logs any errors to the console
        window.addEventListener('error', (error) => {
            console.error('An error occurred:', error);
        });
    }
}
