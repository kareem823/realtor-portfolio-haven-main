import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

// Vulgar words filter (Add more words as needed)
const vulgarWords = [
  "fuck",
  "shit",
  "ass",
  "bitch",
  "damn",
  "crap",
  "piss",
  // Add more inappropriate words here
];

// Function to check for vulgar words
const containsVulgarWords = (text: string) => {
  return vulgarWords.some((word) =>
    text.toLowerCase().includes(word.toLowerCase()),
  );
};

// Custom error message for vulgar content
const vulgarContentMessage = "Please maintain professional language";

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .regex(/^[a-zA-Z\s]*$/, "Name should only contain letters and spaces")
    .refine((value) => !containsVulgarWords(value), vulgarContentMessage),
  email: z
    .string()
    .email("Invalid email address")
    .refine((value) => !containsVulgarWords(value), vulgarContentMessage),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\+?[\d\s-()]*$/, "Invalid phone number format")
    .refine((value) => !containsVulgarWords(value), vulgarContentMessage),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must not exceed 1000 characters")
    .refine((value) => !containsVulgarWords(value), vulgarContentMessage),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(data: ContactForm) {
    try {
      // In a real application, this would send the data to a server
      console.log(data);
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your inquiry. We'll be in touch soon.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  }

  return (
    <Layout>

    <main className="py-12">
      <div className="container px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold">Contact Jon</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Ready to start your real estate journey? Get in touch with Jon for
              personalized assistance.
            </p>

            <div className="mt-12 space-y-8">
              <div className="flex items-start space-x-4">
                <Phone className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="mt-1 text-muted-foreground">
                    +1 (555) 123-4567
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="mt-1 text-muted-foreground">
                    jon.ed@realestate.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-primary shrink-0" />
                <div>
                  <h3 className="font-semibold">Office</h3>
                  <p className="mt-1 text-muted-foreground">
                    123 Richmond Street
                    <br />
                    London, N6A
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 bg-gray-50 p-8 rounded-lg"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black font-semibold">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="John Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black font-semibold">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="john@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black font-semibold">
                        Phone
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="(555) 123-4567"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-black font-semibold">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your real estate needs..."
                          className="min-h-[120px]"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full font-semibold">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </main>
    </Layout>

  );
}
