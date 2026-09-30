export const SIMULATOR_SCENARIOS = {
  dsa: {
    id: 'dsa',
    label: 'Algorithms & DSA',
    icon: 'Code2',
    question: 'How do you design an LRU Cache with O(1) get and put operations?',
    latency: 'Instant Real-Time',
    model: 'Groq | Primary',
    summary:
      'Pair a Hash Map for O(1) key lookups with a Doubly Linked List for O(1) node promotion and least-recent evictions.',
    bullets: [
      'Hash Map: Instant O(1) key-to-node pointer lookup.',
      'Doubly Linked List: O(1) detachment and head promotion on access.',
      'Eviction: Detaches tail node in O(1) time without array shifting.',
    ],
    code: `class LRUCache:
    def __init__(self, capacity: int):
        self.cap, self.cache = capacity, {}
        self.head, self.tail = Node(0, 0), Node(0, 0)
        self.head.next, self.tail.prev = self.tail, self.head

    def get(self, key: int) -> int:
        if key in self.cache:
            node = self.cache[key]
            self._remove(node)
            self._add(node)
            return node.val
        return -1`,
  },
  system: {
    id: 'system',
    label: 'Distributed Systems',
    icon: 'Network',
    question: 'Design a Distributed Rate Limiter for 500k req/s with sub-1ms latency.',
    latency: 'Instant Real-Time',
    model: 'Groq | Primary',
    summary:
      'Use a Token Bucket algorithm backed by Redis Cluster and atomic Lua scripts for sub-millisecond evaluation without locks.',
    bullets: [
      'Token Bucket: Absorbs traffic bursts while enforcing rate ceilings.',
      'Atomic Lua: Evaluates and decrements tokens in a single round-trip.',
      'Edge Caching: Handles 90% of checks locally at API Gateways.',
    ],
    code: null,
  },
  behavioral: {
    id: 'behavioral',
    label: 'Leadership & Behavioral',
    icon: 'MessageSquare',
    question: 'Tell me about a high-stakes production outage you resolved under pressure.',
    latency: 'Instant Real-Time',
    model: 'Groq | Primary',
    summary:
      'Served as Incident Commander during a 45% checkout latency spike; isolated database pool saturation and restored full SLO in 11 minutes.',
    bullets: [
      'Triage: Shed non-essential telemetry writes via circuit breakers.',
      'Root Cause: Resolved DB thread starvation with PgBouncer connection pooling.',
      'Impact: Restored 99.99% availability with zero transaction loss.',
    ],
    code: null,
  },
};
