import {
  ArrowRightIcon,
  BellIcon,
  BoldIcon,
  CheckIcon,
  CopyIcon,
  ExternalLinkIcon,
  ItalicIcon,
  Loader2Icon,
  MailIcon,
  PlusIcon,
  SearchIcon,
  SettingsIcon,
  UnderlineIcon,
  UserIcon,
} from "lucide-react"
import * as React from "react"
import { toast } from "sonner"

import { ThemeToggle } from "@/components/theme-toggle"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Switch } from "@/components/ui/switch"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function App() {
  return (
    <TooltipProvider>
      <div className="bg-background min-h-screen">
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
          <Hero />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <ButtonsSection />
            <BadgesSection />
            <FormSection />
            <CardSection />
            <TabsSection />
            <AccordionSection />
            <TableSection />
            <DialogSection />
            <AvatarsSection />
            <FeedbackSection />
          </div>
        </main>
      </div>
    </TooltipProvider>
  )
}

function Header() {
  return (
    <header className="border-border/50 sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-lg text-sm font-bold">
            R
          </div>
          <span className="text-sm font-semibold tracking-tight">
            Radix Chassis
          </span>
          <Badge variant="secondary">v0.1.0</Badge>
        </div>
        <div className="flex items-center gap-1">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <SettingsIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Configuracoes</TooltipContent>
          </Tooltip>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="py-8 text-center">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
        Component Chassis
      </h1>
      <p className="text-muted-foreground mx-auto mt-3 max-w-lg text-base">
        Base de componentes com shadcn/ui, Radix UI, Tailwind v4. Tema claro e
        escuro com suporte a preferencia do sistema.
      </p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <Button>
          Comecar
          <ArrowRightIcon data-icon="inline-end" />
        </Button>
        <Button variant="outline">
          <ExternalLinkIcon data-icon="inline-start" />
          Documentacao
        </Button>
      </div>
    </section>
  )
}

function ButtonsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Buttons</CardTitle>
        <CardDescription>Variantes e tamanhos de botao</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Button>Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
        <Separator />
        <div className="flex flex-wrap items-center gap-2">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">
            <PlusIcon />
          </Button>
        </div>
        <Separator />
        <div className="flex flex-wrap items-center gap-2">
          <Button disabled>
            <Loader2Icon className="animate-spin" />
            Carregando...
          </Button>
          <Button>
            <MailIcon data-icon="inline-start" />
            Com icone
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function BadgesSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Badges & Toggle</CardTitle>
        <CardDescription>
          Indicadores e controles de alternancia
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
        <Separator />
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">Toggle individual</p>
          <div className="flex gap-2">
            <Toggle aria-label="Toggle bold">
              <BoldIcon />
            </Toggle>
            <Toggle aria-label="Toggle italic">
              <ItalicIcon />
            </Toggle>
            <Toggle aria-label="Toggle underline">
              <UnderlineIcon />
            </Toggle>
          </div>
        </div>
        <Separator />
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">Toggle Group</p>
          <ToggleGroup type="multiple">
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <BoldIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <ItalicIcon />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <UnderlineIcon />
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </CardContent>
    </Card>
  )
}

function FormSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Formulario</CardTitle>
        <CardDescription>Campos de entrada e selecao</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="demo-name">Nome</Label>
          <Input id="demo-name" placeholder="Digite seu nome" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="demo-email">Email</Label>
          <Input id="demo-email" type="email" placeholder="seu@email.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="demo-role">Cargo</Label>
          <Select>
            <SelectTrigger id="demo-role">
              <SelectValue placeholder="Selecione um cargo" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="dev">Desenvolvedor</SelectItem>
                <SelectItem value="design">Designer</SelectItem>
                <SelectItem value="pm">Product Manager</SelectItem>
                <SelectItem value="qa">QA</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="demo-bio">Bio</Label>
          <Textarea id="demo-bio" placeholder="Conte sobre voce..." />
        </div>
        <Separator />
        <div className="flex items-center gap-3">
          <Checkbox id="demo-terms" />
          <Label htmlFor="demo-terms" className="text-sm">
            Aceito os termos de uso
          </Label>
        </div>
        <div className="flex items-center gap-3">
          <Switch id="demo-notifications" />
          <Label htmlFor="demo-notifications" className="text-sm">
            Ativar notificacoes
          </Label>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Salvar</Button>
      </CardFooter>
    </Card>
  )
}

function CardSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Cards</CardTitle>
        <CardDescription>Containers de conteudo</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm">Card simples</CardTitle>
            <CardDescription>
              Um card basico com header e conteudo
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-sm">
              Este e um exemplo de conteudo dentro de um card aninhado.
            </p>
          </CardContent>
        </Card>
        <Card className="border-primary/20 bg-primary/5">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BellIcon className="text-primary size-4" />
              <CardTitle className="text-sm">Notificacao</CardTitle>
            </div>
            <CardDescription>Voce tem 3 mensagens nao lidas</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button size="sm" variant="outline">
              Ver todas
            </Button>
          </CardFooter>
        </Card>
      </CardContent>
    </Card>
  )
}

function TabsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tabs</CardTitle>
        <CardDescription>Navegacao por abas</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="conta">
          <TabsList>
            <TabsTrigger value="conta">Conta</TabsTrigger>
            <TabsTrigger value="senha">Senha</TabsTrigger>
            <TabsTrigger value="equipe">Equipe</TabsTrigger>
          </TabsList>
          <TabsContent value="conta" className="mt-4 space-y-3">
            <div className="space-y-2">
              <Label htmlFor="tab-name">Nome</Label>
              <Input id="tab-name" defaultValue="Gabriel" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tab-email">Email</Label>
              <Input id="tab-email" defaultValue="gabriel@epharma.com" />
            </div>
          </TabsContent>
          <TabsContent value="senha" className="mt-4 space-y-3">
            <div className="space-y-2">
              <Label htmlFor="tab-current">Senha atual</Label>
              <Input id="tab-current" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="tab-new">Nova senha</Label>
              <Input id="tab-new" type="password" />
            </div>
          </TabsContent>
          <TabsContent value="equipe" className="mt-4">
            <p className="text-muted-foreground text-sm">
              Gerencie os membros da sua equipe aqui.
            </p>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}

function AccordionSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Accordion</CardTitle>
        <CardDescription>Conteudo expansivel</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>O que e este projeto?</AccordionTrigger>
            <AccordionContent>
              <p>
                Um chassi front-end com React 19, Tailwind CSS v4, shadcn/ui e
                Radix UI. Pronto para servir de base em novos projetos.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Como adicionar componentes?</AccordionTrigger>
            <AccordionContent>
              <p>
                Use o CLI do shadcn:{" "}
                <code className="bg-muted rounded px-1 py-0.5 text-xs">
                  pnpm dlx shadcn@latest add [componente]
                </code>
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Como funciona o tema?</AccordionTrigger>
            <AccordionContent>
              <p>
                O ThemeProvider gerencia dark/light/system mode via classe CSS
                no HTML root, com persistencia em localStorage.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

const invoices = [
  { id: "INV001", status: "Pago", metodo: "Cartao", valor: "R$ 250,00" },
  { id: "INV002", status: "Pendente", metodo: "Pix", valor: "R$ 150,00" },
  { id: "INV003", status: "Pago", metodo: "Boleto", valor: "R$ 350,00" },
  { id: "INV004", status: "Cancelado", metodo: "Cartao", valor: "R$ 450,00" },
]

function TableSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Tabela</CardTitle>
        <CardDescription>Exibicao de dados tabulares</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Invoice</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Metodo</TableHead>
              <TableHead className="text-right">Valor</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((inv) => (
              <TableRow key={inv.id}>
                <TableCell className="font-medium">{inv.id}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      inv.status === "Pago"
                        ? "default"
                        : inv.status === "Pendente"
                          ? "secondary"
                          : "destructive"
                    }
                  >
                    {inv.status}
                  </Badge>
                </TableCell>
                <TableCell>{inv.metodo}</TableCell>
                <TableCell className="text-right">{inv.valor}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

function DialogSection() {
  const [copied, setCopied] = React.useState(false)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Dialog & Tooltip</CardTitle>
        <CardDescription>Overlays e dicas contextuais</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Abrir Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Editar perfil</DialogTitle>
                <DialogDescription>
                  Faca alteracoes no seu perfil. Clique em salvar quando
                  terminar.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-3">
                <div className="space-y-2">
                  <Label htmlFor="dlg-name">Nome</Label>
                  <Input id="dlg-name" defaultValue="Gabriel" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dlg-email">Email</Label>
                  <Input id="dlg-email" defaultValue="gabriel@epharma.com" />
                </div>
              </div>
              <DialogFooter>
                <Button>Salvar</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  setCopied(true)
                  toast.success("Copiado para a area de transferencia!")
                  setTimeout(() => setCopied(false), 2000)
                }}
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>Copiar</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon">
                <SearchIcon />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Buscar</TooltipContent>
          </Tooltip>
        </div>

        <Separator />

        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">Toast / Sonner</p>
          <div className="flex flex-wrap gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => toast("Evento criado com sucesso")}
            >
              Toast padrao
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => toast.success("Salvo com sucesso!")}
            >
              Sucesso
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => toast.error("Algo deu errado")}
            >
              Erro
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function AvatarsSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Avatars</CardTitle>
        <CardDescription>Representacao visual de usuarios</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-3">
          <Avatar size="sm">
            <AvatarFallback>SM</AvatarFallback>
          </Avatar>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <Avatar size="lg">
            <AvatarFallback>LG</AvatarFallback>
          </Avatar>
        </div>
        <Separator />
        <div>
          <p className="text-muted-foreground mb-2 text-sm">Avatar Group</p>
          <AvatarGroup>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>CD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>EF</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>
                <UserIcon className="size-4" />
              </AvatarFallback>
            </Avatar>
          </AvatarGroup>
        </div>
      </CardContent>
    </Card>
  )
}

function FeedbackSection() {
  const [progress, setProgress] = React.useState(45)

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 0
        return prev + 5
      })
    }, 500)
    return () => clearInterval(timer)
  }, [])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Feedback</CardTitle>
        <CardDescription>Progress, skeleton e indicadores</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span>Progresso</span>
            <span className="text-muted-foreground">{progress}%</span>
          </div>
          <Progress value={progress} />
        </div>
        <Separator />
        <div className="space-y-2">
          <p className="text-muted-foreground text-sm">Skeleton loading</p>
          <div className="flex items-center gap-3">
            <Skeleton className="size-10 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[200px]" />
              <Skeleton className="h-3 w-[150px]" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default App
