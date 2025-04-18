export default function ResultsTable({ results }) {
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {results.map((result) => {
          const totalInterest =
            result.valueEndOfYear - result.annualInvestment * result.year;
          const totalAmountInvested = result.valueEndOfYear - totalInterest;
          return (
            <tr key={result.year}>
              <td>{result.year}</td>
              <td>{result.valueEndOfYear}</td>
              <td>{result.interest}</td>
              <td>{totalInterest}</td>
              <td>{totalAmountInvested}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
