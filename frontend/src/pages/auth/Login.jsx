import Logo from "../../components/common/Logo";
import Card from "../../components/common/Card";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center px-6">
      <Card>
        <div className="flex flex-col gap-6">

          <Logo />

          <div className="space-y-4">
            <Input
              label="Email"
              placeholder="Enter your email"
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
            />
          </div>

          <Button>
            Sign In
          </Button>

          <p className="text-center text-sm text-slate-400">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="font-semibold text-purple-400 hover:text-purple-300"
            >
              Create one
            </Link>
          </p>

        </div>
      </Card>
    </div>
  );
}