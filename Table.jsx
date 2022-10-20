import { MenuOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { arrayMoveImmutable } from 'array-move';
import React, { useState } from 'react';
import type { SortableContainerProps, SortEnd } from 'react-sortable-hoc';
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';

interface DataType {
  key: string;
  year: string;
  faculty: number;
  department: string;
  index: number;
}

const DragHandle = SortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999999' }} />);

const columns: ColumnsType<DataType> = [
  {
    title: 'Sort',
    dataIndex: 'sort',
    width: 30,
    className: 'drag-visible',
    render: () => <DragHandle />,
  },
  {
    title: 'Year',
    dataIndex: 'year',
    className: 'drag-visible',
  },
  {
    title: 'Faculty',
    dataIndex: 'faculty',
  },
  {
    title: 'Department',
    dataIndex: 'department',
  },
];

const data: DataType[] = [
  {
    key: '1',
    year: '2016/2017',
    faculty: "FAS",
    department: 'New York No. 1 Lake Park',
    index: 0,
  },
  {
    key: '2',
    year: '2015/2016',
    faculty: "Management",
    department: 'CIS',
    index: 1,
  },
  {
    key: '3',
    year: '2017/2018',
    faculty: "Agriculture",
    department: 'NR',
    index: 2,
  },
];

const SortableItem = SortableElement((props: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr {...props} />
));
const SortableBody = SortableContainer((props: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody {...props} />
));

const App: React.FC = () => {
  const [dataSource, setDataSource] = useState(data);

  const onSortEnd = ({ oldIndex, newIndex }: SortEnd) => {
    if (oldIndex !== newIndex) {
      const newData = arrayMoveImmutable(dataSource.slice(), oldIndex, newIndex).filter(
        (el: DataType) => !!el,
      );
      console.log('Sorted items: ', newData);
      setDataSource(newData);
    }
  };

  const DraggableContainer = (props: SortableContainerProps) => (
    <SortableBody
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={onSortEnd}
      {...props}
    />
  );

  const DraggableBodyRow: React.FC<any> = ({ className, style, ...restProps }) => {
 
    const index = dataSource.findIndex(x => x.index === restProps['data-row-key']);
    return <SortableItem index={index} {...restProps} />;
  };

  return (
    <Table
      pagination={false}
      dataSource={dataSource}
      columns={columns}
      rowKey="index"
      components={{
        body: {
          wrapper: DraggableContainer,
          row: DraggableBodyRow,
        },
      }}
    />
  );
};

export default App;
.row-dragging {
  background: #fafafa;
  border: 1px solid #cccccc;
}

.row-dragging td {
  padding: 15px;
}

.row-dragging .drag-visible {
  visibility: visible;
}
