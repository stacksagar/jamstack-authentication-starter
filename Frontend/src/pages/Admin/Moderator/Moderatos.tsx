import Checkbox from "../../../components/common/Forms/Checkbox";
import SearchInput from "../../../components/common/Forms/SearchInput";
import AdminLayout from "../../../components/layouts/AdminLayout";
import RegularTableBody from "../../../components/tables/RegularTable/RegularTableBody";
import RegularTableFooter from "../../../components/tables/RegularTable/RegularTableFooter";
import RegularTableHeader from "../../../components/tables/RegularTable/RegularTableHeader";
import RegularTableLayout from "../../../components/tables/RegularTable/RegularTableLayout";
import TableRow from "../../../components/tables/RegularTable/TableRow";

export default function Moderatos() {
  return (
    <AdminLayout>
      <RegularTableLayout>
        <RegularTableHeader>
          <SearchInput placeholder="Search user." />
        </RegularTableHeader>

        <RegularTableBody
          allCheckHandler={() => {}}
          headings={["NAME", "AGE", "ADDRESS", "ACTION"]}
        >
          <TableRow
            rows={["Jim Green", "25", "London No. 1 Lake Park", "Actions"]}
            checkbox={<Checkbox />}
          />
        </RegularTableBody>

        <RegularTableFooter></RegularTableFooter>
      </RegularTableLayout>
    </AdminLayout>
  );
}
