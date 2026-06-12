import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Layout from "@/components/layout/Layout";
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
import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "O nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "Insira um endereço de e-mail válido." }),
  subject: z.string().min(5, { message: "O assunto deve ter pelo menos 5 caracteres." }),
  message: z.string().min(10, { message: "A mensagem deve ter pelo menos 10 caracteres." }),
});

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/medeirosdesign@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message,
          }),
        }
      );
  
      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        alert("Erro ao enviar mensagem.");
      }
    } catch (error) {
      alert("Erro ao enviar mensagem.");
    }
  }

  return (
    <Layout>
      <section className="container mx-auto px-6 pt-32 pb-24 md:pt-48 md:pb-32 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl tracking-tight text-foreground mb-8">
            Contato
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-4xl mb-16">
          Product Designer Sênior com experiência em produtos financeiros, SaaS B2B e sistemas corporativos complexos. Atuo desde a descoberta de oportunidades até a validação de soluções, colaborando com times de Produto, Tecnologia e Negócio para transformar desafios complexos em experiências simples e orientadas a resultados.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card border border-border p-8 md:p-12 rounded-lg shadow-sm"
        >
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center text-center py-16 space-y-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-foreground mb-2">Mensagem Enviada</h3>
                <p className="text-muted-foreground">Obrigado pelo contato. Retornarei em breve.</p>
              </div>
              <Button variant="outline" onClick={() => setIsSubmitted(false)} className="mt-4">
                Enviar nova mensagem
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-muted-foreground">Nome Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Seu nome" {...field} className="bg-background border-border focus-visible:ring-foreground" />
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
                        <FormLabel className="text-muted-foreground">E-mail</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="seu@email.com" {...field} className="bg-background border-border focus-visible:ring-foreground" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground">Assunto</FormLabel>
                      <FormControl>
                        <Input placeholder="Qual o motivo do contato?" {...field} className="bg-background border-border focus-visible:ring-foreground" />
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
                      <FormLabel className="text-muted-foreground">Mensagem</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Conte-me mais sobre o seu projeto..." 
                          className="min-h-[150px] bg-background border-border focus-visible:ring-foreground resize-y" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" size="lg" className="w-full md:w-auto bg-foreground text-background hover:bg-foreground/90 font-medium tracking-wide">
                  Enviar Mensagem
                </Button>
              </form>
            </Form>
          )}
        </motion.div>
      </section>
    </Layout>
  );
}
