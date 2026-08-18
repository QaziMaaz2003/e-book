import Button from "../components/Button.jsx";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-5 sm:px-8 py-32 text-center flex flex-col items-center gap-6">
      <span className="eyebrow">404</span>
      <h1 className="font-display text-4xl sm:text-5xl text-white">This shelf is empty</h1>
      <p className="text-white/55 max-w-md">
        The page you're looking for doesn't exist. Let's get you back to the stacks.
      </p>
      <Button to="/" variant="primary">Back to Home</Button>
    </div>
  );
}
