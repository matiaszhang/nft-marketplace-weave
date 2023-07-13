import classNames from "classnames";

const Table = ({ className, headers, data, emptyLabel, indexCol = "id" }) => {
  return (
    <section className={classNames("text-white", className)}>
      <table className="w-full">
        <thead>
          <tr className="border-b">
            {headers.map((header, index) => (
              <th
                key={index}
                className={classNames("font-normal text-2xl text-white/[0.6] pb-10", {
                  "text-start": headers.length !== index + 1,
                  "text-end": headers.length === index + 1,
                })}
                style={header?.style}
              >
                {header.renderHeader ? header.renderHeader(header) : <div className="">{header.title}</div>}
              </th>
            ))}
          </tr>
        </thead>
        {!!data.length && (
          <tbody className="">
            {data.map((row) => (
              <tr key={row[indexCol]}>
                {headers.map((header, index) => (
                  <td
                    className={classNames("py-5", { "text-end": headers.length === index + 1 })}
                    key={index}
                    style={header.style}
                  >
                    {header.renderCell ? (
                      header.renderCell(row, header, indexCol)
                    ) : (
                      <div className="text-xl">{row[header.field]}</div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </section>
  );
};

export default Table;
