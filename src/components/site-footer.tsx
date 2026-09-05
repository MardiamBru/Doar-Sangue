import fatecCps from "@/assets/fatec-cps.png.asset.json";
import selo from "@/assets/selo-curso.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t-4 border-blood bg-surface-2">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3">
        <div>
          <p className="eyebrow">Projeto de extensão · 2026</p>
          <p className="mt-2 font-display text-lg font-extrabold uppercase text-ink">
            Centro Paula Souza · Fatec Bauru
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Tecnologia em Sistemas Biomédicos · Disciplina de Hematologia
          </p>
          <div className="mt-4 flex items-center gap-4">
            <img src={fatecCps.url} alt="Fatec Bauru e Centro Paula Souza" className="h-7 w-auto" />
            <img src={selo.url} alt="Selo do curso de Sistemas Biomédicos" className="h-10 w-auto" />
          </div>
        </div>

        <div className="text-sm">
          <p className="eyebrow">Créditos</p>
          <p className="mt-2 text-foreground">
            <strong>Docente:</strong> Prof.ª Dr.ª Rogéria Alves de Almeida
          </p>
          <p className="mt-1 text-foreground">
            <strong>Autores:</strong> Alunos de Sistemas Biomédicos — 6º Semestre Noturno
          </p>
        </div>

        <div className="text-sm">
          <p className="eyebrow">Onde doar em Bauru</p>
          <p className="mt-2 font-semibold text-foreground">
            Hemonúcleo do Hospital de Base de Bauru
          </p>
          <p className="text-muted-foreground">Rua Monsenhor Claro, 8-88 · Centro · Bauru/SP</p>
          <a href="tel:+551432314771" className="mt-1 inline-block font-semibold text-blood">
            (14) 3231-4771
          </a>
          <p className="mt-4 text-xs text-muted-foreground">
            Conteúdo educativo. Critérios e horários podem mudar: confirme sempre com o serviço de
            hemoterapia.
          </p>
        </div>
      </div>
    </footer>
  );
}
