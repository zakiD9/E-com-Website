import { Collapse } from "antd";

const { Panel } = Collapse;

export const QnASection = ({ qnaList }: { qnaList: { id: number; question: string; answer: string }[] }) => {
  return (
    <Collapse accordion className="bg-white">
      {qnaList.map((item) => (
        <Panel header={item.question} key={item.id}>
          <div className="flex flex-col gap-1">
            <p className="text-gray-600">{item.answer}</p>
          </div>
        </Panel>
      ))}
    </Collapse>
  );
};
