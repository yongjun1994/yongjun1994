import { Title, Subtitle, Summary, Paragraph } from "../components";
import * as D from "../data";

const paragraphs = D.makeArray(2).map(D.randomParagraphs).join("\n");
const summary = D.makeArray(3).map(D.randomSentence).join("\n");

export default function TextsTest() {
  return (
    <div>
      <Title>TextsTest</Title>
      <div>
        <Title className="text-blue-600">{D.randomTitleText()}</Title>
        <Subtitle className="text-blue-400">{D.randomSentence()}</Subtitle>
        <p className="text-xl italic text-center text-gray-900 text-bold">
          {D.randomName()}
        </p>
        <Paragraph numberOfLines={5}>{paragraphs}</Paragraph>
        <Summary className="text-center text-gray-500">{summary}</Summary>
        <p className="text-center text-pink-400">{D.randomRelativeDate()}</p>
      </div>
    </div>
  );
}
