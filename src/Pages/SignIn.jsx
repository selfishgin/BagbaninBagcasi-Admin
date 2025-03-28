import PageMeta from "../components/common/PageMeta";
import AuthLayout from "../components/common/AuthPageLayout";
import SignInForm from "../auth/SignInForm";

export default function SignIn() {
  return (
    <>
      <PageMeta
        title="BagbaninBagcasi-Admin"
        description="This is React.js SignIn Tables Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <AuthLayout>
        <SignInForm />
      </AuthLayout>
    </>
  );
}
