import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="w-30 h-30 rounded-full border-10 border-t-transparent border-primary animate-spin" />
          <div className="absolute top-1/2 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-b-transparent border-secondary animate-spin-slow" />
          <Loader2 className=" direction-reverse absolute top-1/2 left-1/2 w-10 h-10 -translate-x-1/2 -translate-y-1/2 text-primary animate-spin" />
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-4xl font-semibold bg-gradient-to-r from-purple-900 to-purple-600 bg-clip-text text-transparent">
            Helal Mart
          </h3>
          <p className="text-lg text-muted-foreground">
            Please wait...
          </p>
        </div>
      </div>
    </div>
  );
}
