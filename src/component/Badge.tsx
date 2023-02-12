export default function Badge({ number }: { number: number }) {
  if (number > 0) {
    return (
      <span className="badge bg-primary rounded-pill">{number}</span>
    );
  } else {
    return (
      <span className="badge bg-primary rounded-pill d-none">{number}</span>
    );
  }
}