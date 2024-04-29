// mockup data
const notes = [
  {
    id: '0000001',
    title: '자바스크립트 온라인 스터디(DeepDive)',
    content: '이번주 발표주제 : GraphQL',
    due_date: '2024-04-28T20:00:00.000Z',
    isDone: false,
    invitee_id: '1',
    author_id: '1000',
  },
  {
    id: '0000002',
    title: '온라인 세미나 참석 - AI for Humans',
    content: '온오프믹스 온라인 세미나(10:00)',
    due_date: '2024-04-29T10:00:00.000Z',
    isDone: false,
    invitee_id: '1',
    author_id: '1000',
  },
  {
    id: '0000003',
    title: '업무 컨퍼런스',
    content: '사업확장에 따른 업무 포지션 변경',
    due_date: '2024-05-02T20:00:00.000Z',
    isDone: false,
    invitee_id: '1',
    author_id: '1000',
  },
];

const invitees = [
  {
    id: '100',
    nickname: 'jack',
    relation: 'friend',
    photo: 'https://picsum.photos/id/237/300/300',
    phone: '010-1234-5678',
  },
  {
    id: '101',
    nickname: 'minhee',
    relation: 'co-worker',
    photo: 'https://picsum.photos/id/10/300/300',
    phone: '01088882222',
  },
  {
    id: '103',
    nickname: 'heejin',
    relation: 'friend',
    photo: 'https://picsum.photos/id/200/300/300',
    phone: '01012341004',
  },
];

const authors = [
  {
    id: '1000',
    name: 'yeonghun',
    created_at: '2024-04-28T20:00:00.000Z',
  },
];
export default { notes, invitees, authors };
