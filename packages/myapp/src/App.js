import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  addUserFetch,
  deleteUserFetch,
  editUserFetch,
  getUsersFetch,
} from "./Data/Action";
import { Button, Modal, Input } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons/lib/icons";
import "antd/dist/antd.css";
import { useState } from "react";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [add, setadd] = useState("");
  const [currentRecord, setCurrent] = useState();
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.myReducer.users);

  const addUser = () => {
    const users = { id: Math.random(), name: add };
    dispatch(addUserFetch(users));
    setadd("");
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleInputChange = (e) => {
    setCurrent((prevState) => {
      return { ...prevState, name: e.target.value };
    });
  };

  const showedit = (id) => {
    setIsModalVisible(true);
    setCurrent(selector.find((x) => x.id === id));
  };
  const editOk = () => {
    setIsModalVisible(false);
    dispatch(editUserFetch(2));
  };

  return (
    <div>
      <div className="button-css">
        <div className="bt">
          <Button type="primary" onClick={() => dispatch(getUsersFetch())}>
            GET
          </Button>
        </div>
        <div className="bt">
          <Input
            placeholder="Add user.."
            value={add}
            onChange={(e) => setadd(e.target.value)}
          ></Input>
        </div>
        <div className="bt">
          <Button type="primary" onClick={addUser}>
            ADD
          </Button>
        </div>
      </div>

      <div className="user-data">
        <div>USER DATA MENTIONED BELOW</div>
        <br />
        {selector.map((user) => (
          <div>
            <div className="flex-data">
              <div className="data-space">{user.name}</div>
              <div className="data-space">
                <CloseCircleOutlined
                  className="close"
                  onClick={() => dispatch(deleteUserFetch(user.id))}
                />
              </div>
              <div className="data-space">
                <Button type="danger" onClick={() => showedit(user.id)}>
                  EDIT
                </Button>
              </div>
            </div>
          </div>
        ))}

        <Modal
          title="EDIT USER NAME"
          visible={isModalVisible}
          onCancel={handleCancel}
          onOk={editOk}
        >
          <div>Name</div>
          <Input
            id="nameId"
            value={currentRecord?.name}
            onChange={handleInputChange}
          />
        </Modal>
      </div>
    </div>
  );
}

export default App;
