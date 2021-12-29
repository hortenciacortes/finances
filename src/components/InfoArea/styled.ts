import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 0px 5px #CCC;
    border-radius: 10px;
    padding: 20px;
    margin-top: -40px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
`;

export const MonthArea = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
export const MonthArrow = styled.div`
    cursor: pointer;
    img{
        width: 28px;
    }
`;
export const MonthTitle = styled.div`
    flex: 1;
    text-align: center;
`;
export const ResumeArea = styled.div`
    flex: 2;
    display: flex;
`;

