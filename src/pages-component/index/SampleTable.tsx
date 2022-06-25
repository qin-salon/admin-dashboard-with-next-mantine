import { Table } from "@mantine/core";

/** @package */
export const SampleTable = () => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Element position</th>
          <th>Element name</th>
          <th>Symbol</th>
          <th>Atomic mass</th>
        </tr>
      </thead>
      <tbody>
        {[
          { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
          { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
          { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
          { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
          { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
        ].map((element) => {
          return (
            <tr key={element.name}>
              <td>{element.position}</td>
              <td>{element.name}</td>
              <td>{element.symbol}</td>
              <td>{element.mass}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
