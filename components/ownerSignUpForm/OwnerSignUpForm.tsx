"use client"
import React, { useEffect, useState } from "react";
import LeftSectionPortfolioOwnerSignupPage from "./LeftSectionPortfolioOwnerSignupPage";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";

const OwnerSignUpForm = () => {
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [showThirdForm, setShowThirdForm] = useState(false);

  const [numberOfInputsToShow, setNumberOfInputsToShow] = useState<number>(0);

  const [inputDisabledState, setInputDisabledState] = useState<boolean[]>(
    Array.from({ length: 4 }, () => false)
  );

  return (
    <div className="grid lg:grid-cols-2 justify-items-center mt-[300px] md:mt-[300px] sm:mt-[300px] lg:mt-0">
      <LeftSectionPortfolioOwnerSignupPage />
      {!showSecondForm && !showThirdForm && (
        <FirstForm
          showSecondForm={showSecondForm}
          setShowSecondForm={setShowSecondForm}
        />
      )}
      {showSecondForm && !showThirdForm && (
        <SecondForm
          showThirdForm={showThirdForm}
          setShowThirdForm={setShowThirdForm}
          setNumberOfInputsToShow={setNumberOfInputsToShow}
          numberOfInputsToShow={numberOfInputsToShow}
          inputDisabledState={inputDisabledState}
          setInputDisabledState={setInputDisabledState}
        />
      )}
      {showThirdForm && (
        <ThirdForm
          setShowThirdForm={setShowThirdForm}
          showThirdForm={showThirdForm}
          numberOfInputsToShow={numberOfInputsToShow}
          setNumberOfInputsToShow={setNumberOfInputsToShow}
          inputDisabledState={inputDisabledState}
          setInputDisabledState={setInputDisabledState}
        />
      )}
    </div>
  );
};

export default OwnerSignUpForm