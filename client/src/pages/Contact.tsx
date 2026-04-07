import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertMessageSchema, type InsertMessage } from "@shared/schema";
import { useSendMessage } from "@/hooks/use-messages";
import { useToast } from "@/hooks/use-toast";
import { SectionHeader } from "@/components/SectionHeader";
import { NeonCard } from "@/components/NeonCard";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const sendMessage = useSendMessage();

  const form = useForm<InsertMessage>({
    resolver: zodResolver(insertMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  const onSubmit = (data: InsertMessage) => {
    sendMessage.mutate(data, {
      onSuccess: () => {
        toast({
          title: "Message Sent",
          description: "I'll get back to you as soon as possible.",
        });
        form.reset();
      },
      onError: (error) => {
        toast({
          title: "Error",
          description: error.message,
          variant: "destructive",
        });
      }
    });
  };

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-4">
        <SectionHeader title="Get in Touch" subtitle="Have a project in mind? Let's discuss how we can work together." />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-display font-bold uppercase mb-8">
              Let's Build Something <span className="text-primary">Great</span>
            </h3>
            <p className="text-muted-foreground mb-12 text-lg">
              I'm currently available for freelance work and open to full-time opportunities.
              Whether you need a new website, SEO optimization, or a technical partner, I'm here to help.
            </p>

            <div className="space-y-6">
              <NeonCard variant="primary" className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Email</p>
                  <p className="font-bold">Abhaymotakpalli6@gmail.com</p>
                </div>
              </NeonCard>

              <NeonCard variant="secondary" className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Phone</p>
                  <p className="font-bold">+91 8867371016</p>
                </div>
              </NeonCard>

              <NeonCard variant="accent" className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider">Location</p>
                  <p className="font-bold">Bengaluru, Karnataka (Remote Friendly)</p>
                </div>
              </NeonCard>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-white/10 p-8 md:p-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full pointer-events-none" />

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Name</label>
                <Input
                  {...form.register("name")}
                  className="bg-black/50 border-white/10 focus:border-primary h-12 rounded-none"
                  placeholder="John Doe"
                />
                {form.formState.errors.name && (
                  <p className="text-red-500 text-xs">{form.formState.errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Email</label>
                <Input
                  {...form.register("email")}
                  className="bg-black/50 border-white/10 focus:border-primary h-12 rounded-none"
                  placeholder="john@example.com"
                />
                {form.formState.errors.email && (
                  <p className="text-red-500 text-xs">{form.formState.errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Message</label>
                <Textarea
                  {...form.register("message")}
                  className="bg-black/50 border-white/10 focus:border-primary min-h-[150px] rounded-none resize-none"
                  placeholder="Tell me about your project..."
                />
                {form.formState.errors.message && (
                  <p className="text-red-500 text-xs">{form.formState.errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={sendMessage.isPending}
                className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sendMessage.isPending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
