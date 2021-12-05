import React from 'react'
import Header from '../components/header/Header'
import SiderFinancer from '../components/SiderFinancer/SiderFinancer'
import Table from '../components/table/Table'
import PageHeader from '../components/pageHeader/PageHeader'
export default function propostasPage() {
  return (
    <div>
      <Header />
      <SiderFinancer/>
      <PageHeader />
      <Table/>
    </div>
  )
}
