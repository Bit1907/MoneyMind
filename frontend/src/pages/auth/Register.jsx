import { Link } from "react-router-dom";

import Logo from "../../components/common/Logo";
import Card from "../../components/common/Card";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

export default function Register() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <Card>
        <div className="flex flex-col gap-6">

          <Logo />

          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
              Create Account
            </h2>

            <p className="mt-2 text-slate-400">
              Join MoneyMind and start managing your finances.
            </p>
          </div>

          <div className="space-y-4">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
            />

            <Input
              label="Email"
              placeholder="Enter your email"
            />

            <Input
              label="Password"
              type="password"
              placeholder="Create a password"
            />

            <Input
              label="Confirm Password"
              type="password"
              placeholder="Confirm your password"
            />
          </div>

          <Button>
            Create Account
          </Button>

          <p className="text-center text-sm text-slate-400">
            Already have an account?{" "}
            <Link
              to="/"
              className="font-semibold text-purple-400 hover:text-purple-300"
            >
              Sign In
            </Link>
          </p>

        </div>
      </Card>
    </div>
  );
}