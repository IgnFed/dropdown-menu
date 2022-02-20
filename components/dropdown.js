import { 
  Root,
  Item,
  Content,
  Group,
  TriggerItem,
  Trigger,
  Separator,
  Arrow,
  CheckboxItem,
  ItemIndicator,
} from '@radix-ui/react-dropdown-menu'

import { SiVercel, SiVuedotjs, SiAngularjs, SiReact } from 'react-icons/si'
import { IoIosCheckmark, IoMdArrowDropright } from 'react-icons/io'
import { GiHamburgerMenu, GiRamProfile } from 'react-icons/gi'
import { useState } from 'react';



export default function Dropdown(){

  const [checked, setChecked] = useState(true);

  return(
    <Root className="root" modal={false}>
      <Trigger className='trigger' aria-label='Open menu'><GiHamburgerMenu/> </Trigger>

        <Content className='content'  loop>
        <Group className='group'>
            <Item className='item'>New Private Widnow <kbd className='float-right'>Ctrl+N</kbd></Item>
            <Root>
              <TriggerItem className='nested item'>History<IoMdArrowDropright className='icon float-right'/></TriggerItem>
              <Content className='nested content'>
                <Item className='nested item'><SiVercel className='icon' />Vercel</Item>
                <Item className='nested item'><SiAngularjs className='icon' />Angular</Item>
                <Item className='nested item'><SiVuedotjs className='icon' />Vue</Item>
                <Item className='nested item'><SiReact className='icon' />React</Item>
              </Content>
            </Root>
          </Group>
          <Separator className='separator separator--horizontal'/>
          <Group className='group row-group'>
            <Item className='item' >Edit</Item>
            <Separator className='separator separator--vertical' />
            <Item className='item'>Copy</Item>
            <Separator className='separator separator--vertical' />
            <Item className='item'>Paste</Item>
            <Separator className='separator separator--vertical' />
            <Item className='item'>Cut</Item>
          </Group>
          <Separator className='separator separator--horizontal'/>
          <Group>
            <Item className='item' >Print... <kbd className='float-right'>Ctrl + P</kbd></Item>
            <Item className='item' >Find... <kbd className='float-right'>Ctrl + F</kbd></Item>
          </Group>

          <Separator className='separator separator--horizontal'/>
          <Group>
            <CheckboxItem className='item'
              checked={checked}
              onCheckedChange={setChecked}
            >
              <ItemIndicator className='indicator float-left'>
                <IoIosCheckmark />
              </ItemIndicator>
              Show Bookmarks...<kbd className='float-right' >Ctr + Shift + P</kbd></CheckboxItem>

            <CheckboxItem className='item' >

              <ItemIndicator className='indicator float-left'>
                <IoIosCheckmark />
              </ItemIndicator>
               Show Full URLs... <kbd className='float-right'>Ctrl + L</kbd>
            </CheckboxItem>

          </Group>
          <Separator className='separator separator--horizontal'/>

          <Group>
          <Root>
              <TriggerItem className='nested item'>Users<IoMdArrowDropright className='icon float-right'/></TriggerItem>
              <Content className='nested content'>
                <Item className='nested item'><GiRamProfile className='icon' />Ignacio Fedorenco</Item>
                <Item className='nested item'><GiRamProfile className='icon' />Maria Antonieta</Item>
                <Item className='nested item'><GiRamProfile className='icon' />Jose Crank</Item>
                <Item className='nested item'><GiRamProfile className='icon' />Molly Moriana</Item>
              </Content>
            </Root>
          </Group>
          <Arrow className='arrow'/>
        </Content>
    </Root>
  )
}