import { Menu, Transition } from "@headlessui/react";

type ChatBoxType = {
  chat: string;
  time: string;
  user: "you" | string;
  color: string;
};

const ChatBox = ({ chat, time, user, color }: ChatBoxType) => {
  return (
    <div>
      <p>{user}</p>
      <div>
        <Menu>
          <Menu.Button>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M4.00008 6.66667C3.26675 6.66667 2.66675 7.26667 2.66675 8.00001C2.66675 8.73334 3.26675 9.33334 4.00008 9.33334C4.73341 9.33334 5.33341 8.73334 5.33341 8.00001C5.33341 7.26667 4.73341 6.66667 4.00008 6.66667ZM12.0001 6.66667C11.2667 6.66667 10.6667 7.26667 10.6667 8.00001C10.6667 8.73334 11.2667 9.33334 12.0001 9.33334C12.7334 9.33334 13.3334 8.73334 13.3334 8.00001C13.3334 7.26667 12.7334 6.66667 12.0001 6.66667ZM6.66675 8.00001C6.66675 7.26667 7.26675 6.66667 8.00008 6.66667C8.73341 6.66667 9.33341 7.26667 9.33341 8.00001C9.33341 8.73334 8.73341 9.33334 8.00008 9.33334C7.26675 9.33334 6.66675 8.73334 6.66675 8.00001Z'
                fill='#4F4F4F'
              />
            </svg>
          </Menu.Button>
          <Transition
            enter='transition duration-100 ease-out'
            enterFrom='transform scale-95 opacity-0'
            enterTo='transform scale-100 opacity-100'
            leave='transition duration-75 ease-out'
            leaveFrom='transform scale-100 opacity-100'
            leaveTo='transform scale-95 opacity-0'>
            <Menu.Items>
              <Menu.Item>
                <>Edit</>
              </Menu.Item>
              <Menu.Item>
                <>Delete</>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
        <div style={{ backgroundColor: color }}>
          <p>{chat}</p>
          <p>{time}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;