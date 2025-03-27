import React, { useState } from "react";
import { Link } from "react-router";
import ChevronLeftIcon from "../../public/icons/chevron-left.svg";
import EyeIcon from "../../public/icons/eye.svg";
import EyeCloseIcon from "../../public/icons/eye-close.svg";
import Label from "../components/form/Label";
import Input from "../components/form/input/InputField";
import Checkbox from "../components/form/input/CheckBox";
import Button from "../components/form/Button";

export default function SignUpForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  return (
    <div className="flex flex-col flex-1">
      <div className="w-full max-w-md pt-10 mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-sm text-gray-500 transition-colors hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
        >
          <img src={ChevronLeftIcon} alt="Back to dashboard" className="size-5" />
          Back to dashboard
        </Link>
      </div>
      <div className="flex flex-col justify-center flex-1 w-full max-w-md mx-auto">
        <div className="mb-5 sm:mb-8">
          <h1 className="mb-2 font-semibold text-gray-800 text-title-sm dark:text-white/90 sm:text-title-md">
            Sign Up
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Please fill out the form to create an account!
          </p>
        </div>

        <form>
          <div className="space-y-6">
            <div>
              <Label>
                Full Name <span className="text-error-500">*</span>
              </Label>
              <Input placeholder="Enter your full name" />
            </div>
            <div>
              <Label>
                Email <span className="text-error-500">*</span>
              </Label>
              <Input placeholder="example@gmail.com" />
            </div>
            <div>
              <Label>
                Password <span className="text-error-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <span
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                >
                  <img
                    src={showPassword ? EyeIcon : EyeCloseIcon}
                    alt="Toggle password visibility"
                    className="fill-gray-500 dark:fill-gray-400 size-5"
                  />
                </span>
              </div>
            </div>
            <div>
              <Label>
                Confirm Password <span className="text-error-500">*</span>
              </Label>
              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                />
                <span
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute z-30 -translate-y-1/2 cursor-pointer right-4 top-1/2"
                >
                  <img
                    src={showConfirmPassword ? EyeIcon : EyeCloseIcon}
                    alt="Toggle confirm password visibility"
                    className="fill-gray-500 dark:fill-gray-400 size-5"
                  />
                </span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Checkbox checked={agreeTerms} onChange={setAgreeTerms} />
              <span className="block font-normal text-gray-700 text-theme-sm dark:text-gray-400">
                I agree to the Terms and Conditions
              </span>
            </div>
            <div>
              <Button className="w-full" size="sm">
                Sign Up
              </Button>
            </div>
          </div>
        </form>

        <div className="mt-5">
          <p className="text-sm font-normal text-center text-gray-700 dark:text-gray-400 sm:text-start">
            Already have an account?{" "}
            <Link
              to="/" // bu linki sign in'e aparir. Cunki sign in ucun url "/" olur. App jsx'e bax"
              className="text-brand-500 hover:text-brand-600 dark:text-brand-400"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
