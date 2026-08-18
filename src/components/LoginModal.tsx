
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("student");
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate login
    toast({
      title: "Login Successful!",
      description: `Welcome back! You've been logged in as a ${userType}.`,
    });
    
    setEmail("");
    setPassword("");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">Login to TechEng</DialogTitle>
        </DialogHeader>
        
        <Tabs value={userType} onValueChange={setUserType} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="student" className="flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Student
            </TabsTrigger>
            <TabsTrigger value="faculty" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Faculty
            </TabsTrigger>
          </TabsList>

          <TabsContent value="student">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="student-email">Student Email</Label>
                    <Input
                      id="student-email"
                      type="email"
                      placeholder="student@techeng.edu"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="student-password">Password</Label>
                    <Input
                      id="student-password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Login as Student
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="faculty">
            <Card>
              <CardContent className="pt-6">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="faculty-email">Faculty Email</Label>
                    <Input
                      id="faculty-email"
                      type="email"
                      placeholder="faculty@techeng.edu"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="faculty-password">Password</Label>
                    <Input
                      id="faculty-password"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Login as Faculty
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="text-center text-sm text-muted-foreground">
          <p>
            Forgot your password?{" "}
            <button className="text-foreground hover:underline">Reset here</button>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
