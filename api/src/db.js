// mockup data
const notes = [
  {
    id: '1',
    title: '자바스크립트 온라인 스터디(DeepDive)',
    content: '이번주 발표주제 : GraphQL',
    due_date: '2024-04-28T20:00:00.000Z',
    isDone: false,
    invitee_id: '1',
  },
  {
    id: '2',
    title: '온라인 세미나 참석 - AI for Humans',
    content: '온오프믹스 온라인 세미나(10:00)',
    due_date: '2024-04-29T10:00:00.000Z',
    isDone: false,
    invitee_id: '1',
  },
  {
    id: '3',
    title: '업무 컨퍼런스',
    content: '사업확장에 따른 업무 포지션 변경',
    due_date: '2024-05-02T20:00:00.000Z',
    isDone: false,
    invitee_id: '1',
  },
];

const invitees = [
  {
    id: '1',
    nickname: 'jack',
    relation: 'friend',
    email: 'jackdaniel@me.com',
  },
  {
    id: '2',
    nickname: 'minhee',
    relation: 'co-worker',
    email: 'smart_minhee@and.com',
  },
  {
    id: '2',
    nickname: 'heejin',
    relation: 'friend',
    email: 'newjeans_mom@you.com',
  },
];
export default { notes, invitees };
