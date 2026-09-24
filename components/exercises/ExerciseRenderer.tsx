import { Exercise } from '@/types/exercise';
import MultipleChoice from './MultipleChoice';
import SentenceOrder from './SentenceOrder';
import Translation from './Translation';
import FillBlank from './FillBlank';
import Matching from './Matching';
import GrammarChoice from './GrammarChoice';

interface Props {
  exercise: Exercise;
  isAnswered: boolean;
  isCorrect: boolean;
  onCheck: (correct: boolean) => void;
  onNext: () => void;
}

export default function ExerciseRenderer(props: Props) {
  const { exercise } = props;

  switch (exercise.type) {
    case 'multiple_choice':
      return <MultipleChoice {...props} exercise={exercise} />;
    case 'sentence_ordering':
      return <SentenceOrder {...props} exercise={exercise} />;
    case 'translation':
      return <Translation {...props} exercise={exercise} />;
    case 'fill_blank':
      return <FillBlank {...props} exercise={exercise} />;
    case 'matching':
      return <Matching {...props} exercise={exercise} />;
    case 'grammar_choice':
      return <GrammarChoice {...props} exercise={exercise} />;
    default:
      return <div>Unsupported exercise type</div>;
  }
}
