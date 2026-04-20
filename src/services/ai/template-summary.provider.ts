import type { SummaryProvider } from './summary-provider.interface';
import { impactLabels, painCategoryLabels, scenarioLabels } from '@/templates/diagnosis-summary.templates';

export const templateSummaryProvider: SummaryProvider = {
  generateSummary({ answers, result }) {
    const scenarioLabel = answers.currentScenario ? scenarioLabels[answers.currentScenario] : 'processos manuais';
    const painLabel = answers.painCategory ? painCategoryLabels[answers.painCategory] : 'gargalos operacionais';
    const impactLabel = answers.impacts
      .slice(0, 2)
      .map((impact) => impactLabels[impact])
      .join(' e ');

    return `Hoje sua operação depende de ${scenarioLabel}, o que tende a ampliar ${impactLabel || 'ineficiências'} em ${painLabel}. Pelo escopo informado, a recomendação é começar com ${result.recommendedApproach.toLowerCase()}, priorizando os módulos centrais e evoluindo em fases conforme validação e retorno operacional.`;
  },
};
